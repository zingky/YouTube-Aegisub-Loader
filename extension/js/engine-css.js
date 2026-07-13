               // which can be adjusted via X/Y sliders in the UI
                    posX = s.posX;
                    posY = s.posY;
                }
                lineInfos.push({ sub, isO, fs, ow, bl, oc, c1, posX, posY, isExplicit, align: effectiveAlign });
            });

            const autoLines = lineInfos.filter(l => !l.isExplicit).sort((a, b) => a.posY - b.posY);
            let idx = 0;
            while (idx < autoLines.length) {
                let end = idx;
                while (end + 1 < autoLines.length && autoLines[end + 1].posY - autoLines[idx].posY < 40) {
                    end++;
                }
                const group = autoLines.slice(idx, end + 1);
                if (group.length > 1) {
                    const baseY = group[0].posY;
                    group.forEach((line, i) => {
                        line.posY = baseY + i * (line.fs * 1.4);
                    });
                }
                idx = end + 1;
            }

            const ub = __.globalSettings.useBox;
            const bc = __.globalSettings.boxColor;
            const bo = __.globalSettings.boxOpacity;

            lineInfos.forEach(({ sub, isO, fs, ow, bl, oc, c1, posX, posY, align }) => {
                let opacity = 1;
                const fadIn = __.globalSettings.fadIn / 1000;
                const fadOut = __.globalSettings.fadOut / 1000;
                if (time - sub.start < fadIn) opacity = (time - sub.start) / fadIn;
                else if (sub.end - time < fadOut) opacity = (sub.end - time) / fadOut;

                let groups = sub.syllableGroups;
                if (!groups || groups.length === 0) {
                    const lines = (sub.text || '').split('\n');
                    groups = lines.map(l => ({ syllables: sub.syllables || [], text: l }));
                }

                const totalLines = groups.length;
                groups.forEach((group, li) => {
                    const lineText = group.text || '';
                    const sylArray = group.syllables || [];
                    const div = renderSubLine(sub, lineText, li, totalLines, sylArray, fs, posX, posY, ow, bl, oc, c1, ub, bc, bo, opacity, isO, sub.style, align);
                    layer.appendChild(div);
                });
            });
        }
        requestAnimationFrame(updateSubtitle);
    }

    const origRequestFullscreen = HTMLVideoElement.prototype.requestFullscreen || HTMLVideoElement.prototype.webkitRequestFullscreen;
    if (origRequestFullscreen) {
        HTMLVideoElement.prototype.requestFullscreen = HTMLVideoElement.prototype.webkitRequestFullscreen = function () {
            __.isFullscreen = true;
            return origRequestFullscreen.apply(this, arguments);
        };
    }

    document.addEventListener('fullscreenchange', () => { __.isFullscreen = !!document.fullscreenElement; });
    document.addEventListener('webkitfullscreenchange', () => { __.isFullscreen = !!document.webkitFullscreenElement; });

    __.startEngine = function () {
        requestAnimationFrame(updateSubtitle);
    };
})();