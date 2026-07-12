// JASSUB in MAIN WORLD - loaded as a blob module script
// All dependencies are fetched and bundled into one script
// to avoid CSP issues with bare module imports

// Wait for initialization message from content script
window.addEventListener('message', async (e) => {
    if (e.source !== window) return;
    const d = e.data;
    if (!d || !d.type) return;

    if (d.type === '__jassub_bootstrap') {
        // d.files contains the code of all JASSUB files
        initJassub(d.files, d.subContent);
    }
});

async function initJassub(files, subContent) {
    const {
        jassubCode,
        debugCode,
        workerCode,
        utilCode,
        preWorkerCode,
        renderers2d,
        renderersWebgl1,
        renderersWebgl2,
        renderersWebgpu,
        wasmUrl,
        modernWasmUrl
    } = files;

    // 1. Build worker blob (self-contained)
    const workerBundle = `
// JASSUB Worker Bundle
const jassub_renderers_2d_renderer = {};
(function(exports){
${renderers2d}
})(jassub_renderers_2d_renderer);

const jassub_renderers_webgl1_renderer = {};
(function(exports){
${renderersWebgl1}
})(jassub_renderers_webgl1_renderer);

const jassub_renderers_webgl2_renderer = {};
(function(exports){
${renderersWebgl2}
})(jassub_renderers_webgl2_renderer);

const jassub_renderers_webgpu_renderer = {};
(function(exports){
${renderersWebgpu}
})(jassub_renderers_webgpu_renderer);

// util.js
(function(){
${utilCode}
})();

// extern-pre-worker.js
${preWorkerCode}

// worker.js
(function(){
${workerCode}
})();
`;

    const workerBlob = new Blob([workerBundle], { type: 'text/javascript' });
    const workerBlobUrl = URL.createObjectURL(workerBlob);

    // 2. Build main JASSUB bundle
    // Shim bare imports with proxies
    const jassubBundle = `
// rvfc-polyfill stub
const $rvfc = {};

// abslink minimal implementation
const $abslinkExports = {};
class $Link {
    constructor(inner) { this._inner = inner; }
}
$abslinkExports.transfer = (val, bufs) => val;
$abslinkExports.proxy = (val) => val;
$abslinkExports.releaseProxy = () => {};

// abslink/w3c - wrap for Workers
const $abslinkW3cExports = {};
$abslinkW3cExports.wrap = (worker) => {
    return class Renderer {
        constructor(...args) {
            return new Promise((resolve) => {
                const handler = (e) => {
                    if (e.data && e.data.type === 'ready') {
                        worker.removeEventListener('message', handler);
                        resolve(self.__jassub_renderer);
                    }
                };
                worker.addEventListener('message', handler);
                worker.postMessage(...args);
            });
        }
    };
};

// Debug module
const $Debug = (function() {
${debugCode}
return typeof Debug !== 'undefined' ? Debug : self.__Debug;
})();

// Patched JASSUB main code
(function(){
${jassubCode}
})();
`;

    // Evaluate jassub in a function context to inject our shims
    const evalCode = `
(function(imports) {
    const proxy = imports.proxy;
    const releaseProxy = imports.releaseProxy;
    const transfer = imports.transfer;
    const wrap = imports.wrap;
    const Debug = imports.Debug;
    const JASSUB = imports.jassubDefault;
    
    ${jassubCode}
    
    self.__JASSUB = JASSUB;
})($abslinkExports, $abslinkW3cExports, $Debug);
`;

    // Execute via Function constructor to control scope
    try {
        const fn = new Function('$abslinkExports', '$abslinkW3cExports', '$Debug', `
            const JASSUB = (function() {
                ${jassubCode}
                return JASSUB;
            })();
            return JASSUB;
        `);

        const JASSUB = fn($abslinkExports, $abslinkW3cExports, $Debug);

        // Store globally
        self.__JASSUB = JASSUB;
        self.__JASSUB_WORKER_URL = workerBlobUrl;
        self.__JASSUB_WASM_URL = wasmUrl;
        self.__JASSUB_MODERN_WASM_URL = modernWasmUrl;

        // Signal ready
        window.postMessage({ type: '__jassub_ready' }, '*');

        // Now wait for sub init
        startJassub(subContent);
    } catch (err) {
        window.postMessage({ type: '__jassub_error', error: err.message + ' | ' + (err.stack || '') }, '*');
    }
}

let _instance = null;
let _canvas = null;

async function startJassub(subContent) {
    const JASSUB = self.__JASSUB;
    if (!JASSUB || !subContent) return;

    try {
        const video = document.querySelector('video');
        if (!video) {
            window.postMessage({ type: '__jassub_error', error: 'No video element' }, '*');
            return;
        }

        if (_instance) {
            try { _instance.destroy(); } catch(e) {}
            _instance = null;
        }
        if (_canvas && _canvas.parentNode) _canvas.remove();

        _canvas = document.createElement('canvas');
        _canvas.style.cssText = 'position:absolute;pointer-events:none;z-index:41;left:0;top:0;width:100%;height:100%;object-fit:fill;';
        const player = video.closest('.html5-video-player');
        if (player) player.appendChild(_canvas);
        else video.insertAdjacentElement('afterend', _canvas);

        _instance = new JASSUB({
            video: video,
            canvas: _canvas,
            subContent: subContent,
            workerUrl: self.__JASSUB_WORKER_URL,
            wasmUrl: self.__JASSUB_WASM_URL,
            modernWasmUrl: self.__JASSUB_MODERN_WASM_URL,
            debug: false,
            prescaleFactor: 0.3,
            prescaleHeightLimit: 720,
            maxRenderHeight: 720,
            timeOffset: 0
        });

        await _instance.ready;
        window.postMessage({ type: '__jassub_inited' }, '*');
    } catch (err) {
        window.postMessage({ type: '__jassub_error', error: err.message + ' | ' + (err.stack || '') }, '*');
    }
}

// Listen for update messages from content script
window.addEventListener('message', async (e) => {
    if (e.source !== window) return;
    const d = e.data;
    if (!d || !d.type) return;

    if (d.type === '__jassub_update' && self.__JASSUB) {
        await startJassub(d.subContent);
        window.postMessage({ type: '__jassub_updated' }, '*');
    }

    if (d.type === '__jassub_destroy' && _instance) {
        try { _instance.destroy(); } catch(e) {}
        _instance = null;
        if (_canvas && _canvas.parentNode) _canvas.remove();
        _canvas = null;
        self.__JASSUB = null;
        window.postMessage({ type: '__jassub_destroyed' }, '*');
    }
});

// Signal that bootstrap listener is ready
window.postMessage({ type: '__jassub_listener_ready' }, '*');
</file>
</write_to_file>