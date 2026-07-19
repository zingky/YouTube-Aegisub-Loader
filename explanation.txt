╔════════════════════════════════════════════════════════════════════════╗
║              YouTube Aegisub Loader — Tổng quan các nút / chức năng  ║
║              YouTube Aegisub Loader — All buttons & features guide    ║
╚════════════════════════════════════════════════════════════════════════╝

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. CSS / ASS.js (HEADER — Chọn Engine Render)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- **CSS (mặc định):** Engine CSS. Dùng text-shadow của CSS để vẽ outline,
  blur, box, hiệu ứng (rainbow, sine wave, glow...). Nhẹ, realtime, được
  tuỳ chỉnh nhiều thông số qua giao diện.
- **ASS.js:** Engine WebGL/Canvas. Render giống Aegisub / ffplay nhất
  (đúng vị trí `\pos`, scale chữ, font,...). Nặng hơn, ít tuỳ chỉnh hơn.
  Khi bật ASS.js, hầu hết các nút bên dưới (outline, blur, karaoke,
  special effect) sẽ bị vô hiệu hoá — vì ASS.js tự render mọi thứ.

- **CSS (default):** The CSS engine. Uses CSS text-shadow to draw outlines,
  blur, box, and effects (rainbow, sine wave, glow...). Lightweight, real-time,
  highly customizable through the UI.
- **ASS.js:** WebGL/Canvas engine. Renders as closely as possible to
  Aegisub / ffplay (correct `\pos`, font scaling, etc.). Heavier, fewer
  custom controls. When ASS.js is ON, most buttons below (outline, blur,
  karaoke, special effect) are disabled — ASS.js handles everything itself.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2. Use Text-Stroke (ADVANCED tab — Kiểu viền CSS hiện đại)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

BẬT (ON):
  - Outline được vẽ bằng CSS `-webkit-text-stroke` (viền CSS kiểu mới).
  - `text-shadow` chỉ dùng để tạo glow / blur — không tạo outline cứng.
  - Giá trị `ow` (outline width) lan rộng bán kính blur thay vì tạo
    vòng 8 hướng. Nhìn mượt, hiện đại.
  - Ưu: Viền mượt, không vỡ hạt ở góc chữ, phù hợp font nhỏ.
  - Nhược: `-webkit-text-stroke` vẽ outline ở GIỮA viền chữ, không phải
    bên ngoài như Aegisub, nên outline có thể hơi "dày" hơn so với
    8-direction text-shadow.

TẮT (OFF — mặc định):
  - Outline vẽ bằng `text-shadow` với 8 lớp đổ bóng
    (8 hướng: trên, dưới, trái, phải, 4 góc chéo).
  - Đây là cách vẽ outline truyền thống, giống Aegisub.
  - Ưu: Viền sắc nét ở bên ngoài chữ, giống Aegisub gốc.
  - Nhược: Dễ bị "răng cưa" / vỡ hạt ở đường cong và góc nhọn.

Tóm lại:
  - BẬT: Mượt, glow đẹp, phù hợp font nhỏ, outline hơi dày.
  - TẮT: Sắc, giống Aegisub, outline mỏng hơn, dễ vỡ hạt.

ON:
  - Outline drawn with CSS `-webkit-text-stroke` (modern CSS border).
  - `text-shadow` used for glow / blur only — no hard outline ring.
  - The `ow` value spreads the blur radius wider instead of creating
    8-direction rings. Smooth, modern look.
  - Pro: Smooth edges, no pixelation on curves, good for small fonts.
  - Con: `-webkit-text-stroke` draws outline INSIDE the letter edge,
    not outside like Aegisub, so it can look slightly "thicker".

OFF (default):
  - Outline drawn with `text-shadow` using 8 shadow layers
    (up, down, left, right, 4 diagonals).
  - Traditional Aegisub-compatible outline method.
  - Pro: Sharp outer edge, matches Aegisub output closely.
  - Con: Can show aliasing / pixelation on curves and sharp corners.

Summary:
  - ON: Smooth, nice glow, good for small fonts, outline slightly thick.
  - OFF: Sharp, Aegisub-like, thinner outline, may have aliasing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3. Deep Glow (ADVANCED tab — Hiệu ứng phát sáng Neon)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

BẬT (ON):
  - Sử dụng nhiều lớp `text-shadow` xếp chồng lên nhau với độ mờ tăng dần,
    tạo hiệu ứng phát sáng neon / glow dày và mạnh.
  - Ảnh hưởng: Cả non-karaoke và cả 3 tab karaoke (kPre, kActive, kPost).
  - Tốt cho chữ to, hiệu ứng sân khấu, neon sign.
  - Tiêu tốn performance hơn (nhiều lớp shadow).

TẮT (OFF — mặc định):
  - Chỉ dùng 8-direction text-shadow cơ bản (1 lớp) cho outline + blur.
  - Không có glow mở rộng.
  - Nhẹ hơn, phù hợp máy cấu hình thấp.

ON:
  - Stacks multiple `text-shadow` layers with increasing blur to create
    a thick neon / glow effect.
  - Affects: Both non-karaoke lines AND all 3 karaoke tabs
    (kPre, kActive, kPost).
  - Great for large text, stage effects, neon signs.
  - More performance-heavy (many shadow layers).

OFF (default):
  - Basic 8-direction text-shadow (1 layer) for outline + blur only.
  - No extended glow.
  - Lighter, suitable for low-end machines.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4. Use Box (GENERAL tab — Nền hộp cho phụ đề)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

BẬT (ON):
  - Phụ đề có nền hình chữ nhật bo góc (màu + độ mờ tuỳ chỉnh).
  - Giúp đọc chữ dễ hơn khi video có nền sáng / nhiều chi tiết.
  - Có thể chỉnh màu nền (Box Color) và độ mờ (Box Opacity).

TẮT (OFF — mặc định):
  - Phụ đề không có nền, chỉ chữ + viền + glow.
  - Nhìn tự nhiên hơn, không che video.

ON:
  - Subtitles have a rounded rectangle background
    (color + opacity adjustable).
  - Improves readability on bright / busy video backgrounds.
  - Background color and opacity configurable (Box Color / Opacity).

OFF (default):
  - No background, text only with outline + glow.
  - More natural look, doesn't block the video.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5. Karaoke Tabs (KARAOKE tab — Pre / Active / Post)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- **Pre:** Âm tiết chưa hát — màu sắc, outline, blur trước khi đến lượt.
  - Mặc định: 1c (màu chữ) = xám, 3c (màu viền) = đen, outline = 1, blur = 0.
  - Khi bật ⚙️ ở style, Pre tôn trọng màu sắc từ style override.
- **Active:** Âm tiết đang hát — màu sắc, outline, blur trong lúc hát.
  - Mặc định: 1c = trắng, 3c = đỏ, outline = 2, blur = 0.
  - Active LUÔN dùng giá trị từ tab kActive, bất kể ⚙️ style có bật hay không.
- **Post:** Âm tiết đã hát xong — màu sắc, outline, blur sau khi hát.
  - Mặc định: 1c = trắng, 3c = xanh dương, outline = 1, blur = 0.
  - Khi bật ⚙️ ở style, Post tôn trọng màu sắc từ style override.

- Zoom (Active tab): Hiệu ứng phóng to âm tiết đang hát.
  - zoom: Tỉ lệ phóng (1 = không zoom, 1.5 = 150%, 2 = 200%).
  - zIn (ms): Thời gian phóng to khi bắt đầu hát (vd 100ms).
  - zOut (ms): Thời gian thu nhỏ khi kết thúc hát (vd 100ms).
- Blur (mỗi tab): Độ mờ của âm tiết (Pre blur, Active blur, Post blur).
  - Blur càng cao, chữ càng mờ.

- **Pre:** Syllables before being sung — color, outline, blur before the
  syllable's active period.
  - Default: 1c (text color) = gray, 3c (outline color) = black,
    outline = 1, blur = 0.
  - When ⚙️ per-style override is ON, Pre respects style override colors.
- **Active:** Syllable currently being sung — color, outline, blur during
  the syllable's active period.
  - Default: 1c = white, 3c = red, outline = 2, blur = 0.
  - Active ALWAYS uses kActive tab values regardless of ⚙️ override.
- **Post:** Syllable already sung — color, outline, blur after the syllable
  has ended.
  - Default: 1c = white, 3c = blue, outline = 1, blur = 0.
  - When ⚙️ per-style override is ON, Post respects style override colors.

- Zoom (Active tab): Active syllable scaling effect.
  - zoom: Scale factor (1 = no zoom, 1.5 = 150%, 2 = 200%).
  - zIn (ms): Zoom-in duration when syllable starts (e.g. 100ms).
  - zOut (ms): Zoom-out duration when syllable ends (e.g. 100ms).
- Blur (each tab): Character blur level (Pre blur, Active blur, Post blur).
  - Higher blur = more blurred text.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
6. Special Effects (GENERAL tab → Special Effect)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- **none (mặc định):** Không hiệu ứng, chỉ outline + blur cơ bản.
- **rainbow_outline:** Viền chữ đổi màu cầu vồng theo thời gian.
  Trong karaoke: mỗi ký tự có hue lệch nhau.
- **rainbow_outline_rgb:** Viền cầu vồng dạng gradient RGB cuộn ngang.
- **rainbow_text:** Chữ cầu vồng gradient (viền đen bên dưới).
- **sine_wave:** Chữ nhấp nhô hình sin theo chiều dọc. Mỗi ký tự nhấp nhô
  độc lập. Biên độ có thể chỉnh ở Advanced → Sine Wave Amplitude.
- **shine_sweep:** Hiệu ứng ánh sáng quét ngang qua chữ (giống shine trong
  karaoke). Dùng CSS mask để tạo vệt sáng.
- **split_color:** Nửa trên chữ trắng, nửa dưới chữ xanh.
- **retro_80s:** Chữ hồng + viền xanh cyan kiểu Retro 80s synthwave.
- **golden:** Chữ gradient vàng óng (gold metallic).
- **float_hover:** Chữ nổi lên xuống nhẹ nhàng (lên xuống 8px).
- **breathe:** Chữ phồng / xẹp nhẹ (scale 0.95–1.05).
- **jello:** Hiệu ứng rung jelly (co giãn X/Y khi mới xuất hiện).
- **typewriter:** Chữ xuất hiện từ từ từng ký tự một (dựa trên thời gian
  dòng, không lặp lại).
- **pulse:** Nhịp tim — chữ phồng lên 2 nhịp rồi thường.
- **shake:** Chữ rung lắc ngẫu nhiên.
- **glitch:** Hiệu ứng lỗi glitch (tách kênh đỏ/xanh).
- **ghosting:** Bóng ma — 2 bản sao mờ di chuyển quanh chữ.
- **water_reflection:** Phản chiếu dưới nước (lật dọc + mờ + trong suốt).
- **d3d_block:** Viền khối 3D (4 lớp shadow cứng).
- **glow_pulse:** Glow nhấp nháy theo nhịp (blur + outline thay đổi).

Effect Speed (thanh trượt ADVANCED): Tốc độ chung cho các hiệu ứng động.
Mỗi hiệu ứng có thể override riêng.

- **none (default):** No effect, basic outline + blur only.
- **rainbow_outline:** Rainbow hue-rotating outline over time.
  In karaoke: each character has offset hue.
- **rainbow_outline_rgb:** Scrolling RGB gradient outline.
- **rainbow_text:** Rainbow gradient text (dark outline below).
- **sine_wave:** Sine-wave vertical bobbing. Each character bobs
  independently. Amplitude adjustable in Advanced → Sine Wave Amplitude.
- **shine_sweep:** Sweeping light across text (karaoke-shine style).
  Uses CSS mask for the sweep effect.
- **split_color:** Top half white, bottom half blue.
- **retro_80s:** Pink text + cyan outline, 80s synthwave style.
- **golden:** Gold metallic gradient text.
- **float_hover:** Gentle floating up/down (8px range).
- **breathe:** Gentle scale pulse (0.95–1.05).
- **jello:** Jelly wobble X/Y stretch on appear.
- **typewriter:** Characters appear one by one over time
  (based on line elapsed time, no loop).
- **pulse:** Heartbeat — 2 thump pulses then rest.
- **shake:** Random shake / quake effect.
- **glitch:** Glitch effect (red/green channel offset).
- **ghosting:** Ghostly trailing copies floating around.
- **water_reflection:** Mirrored reflection (flipped + blurred + faded).
- **d3d_block:** 3D block shadow (4 hard shadow layers).
- **glow_pulse:** Pulsing glow (blur + outline breathe).

Effect Speed (ADVANCED slider): Master speed for all animated effects.
Each effect has its own internal multiplier.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
7. Font & Text Settings (GENERAL tab)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- **Font Family:** Chọn font chữ mặc định (global).
- **Color 1c (text):** Màu chữ mặc định.
- **Color 3c (outline):** Màu viền mặc định.
- **Font Size:** Cỡ chữ toàn cục (px). Khi ⚙️ của style bật, style dùng
  font size riêng.
- **Outline Width:** Độ dày viền toàn cục.
- **Blur:** Độ mờ toàn cục (0 = không mờ).
- **Bold / Italic / Underline / Strikethrough:** Định dạng chữ.
- **Text Zoom:** Phóng to / thu nhỏ chữ (0.5x–3x). Riêng biệt với font size.

- **Font Family:** Global font selection.
- **Color 1c (text):** Global text color.
- **Color 3c (outline):** Global outline color.
- **Font Size:** Master font size (px). When ⚙️ per-style is ON, style
  uses its own font size.
- **Outline Width:** Master outline thickness.
- **Blur:** Master blur level (0 = no blur).
- **Bold / Italic / Underline / Strikethrough:** Text formatting.
- **Text Zoom:** Text scaling (0.5x–3x). Independent from font size.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
8. Per-Style Override (STYLES tab — ⚙️ / gear icon)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- **⚙️ ON:** Style dùng màu sắc, font size, outline, blur riêng (giá trị
  trong mục Style đó). Các giá trị này có thể chỉnh riêng cho từng style.
- **⚙️ OFF:** Style dùng giá trị toàn cục (GENERAL tab).

- **👁️ (eye) ON:** Style hiển thị bình thường.
- **👁️ OFF:** Style ẩn (không render).
- **Reset (⟳) button:** Đặt lại vị trí X, Y, màu sắc, font size (25),
  outline (2), blur (2) về giá trị gốc từ file ASS.
- **Reset All (⟳ ALL):** Làm điều này cho tất cả style cùng lúc.

- **⚙️ ON:** Style uses its own colors, font size, outline, blur
  (values set in the Style section). Each style is individually configurable.
- **⚙️ OFF:** Style uses global values (GENERAL tab).

- **👁️ (eye) ON:** Style is visible and renders normally.
- **👁️ OFF:** Style is hidden (won't render).
- **Reset (⟳) button:** Restores X, Y, colors, font size (25),
  outline (2), blur (2) to original ASS values.
- **Reset All (⟳ ALL):** Applies the above reset to all styles at once.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
9. Position Controls (STYLES tab — X / Y slider)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- X slider: Điều chỉnh vị trí ngang (giá trị ASS coordinate).
- Y slider: Điều chỉnh vị trí dọc (giá trị ASS coordinate).
- Số bên cạnh là giá trị chính xác, có thể nhập tay.

- X slider: Horizontal position (ASS coordinate units).
- Y slider: Vertical position (ASS coordinate units).
- Numeric input next to slider shows exact value, can be typed in.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
10. Fade In / Fade Out (ADVANCED tab)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- **Fade In (ms):** Thời gian phụ đề mờ dần lên khi mới xuất hiện (ms).
  Mặc định 0 = tắt.
- **Fade Out (ms):** Thời gian phụ đề mờ dần khi sắp kết thúc (ms).
  Mặc định 0 = tắt.

- **Fade In (ms):** Fade-in duration when subtitle appears (ms).
  Default 0 = disabled.
- **Fade Out (ms):** Fade-out duration when subtitle ends (ms).
  Default 0 = disabled.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
11. Letter Spacing (ADVANCED tab)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Khoảng cách giữa các ký tự (px). > 0 → chữ giãn ra.
- Chỉ áp dụng ở non-karaoke. Karaoke dùng marginRight riêng.

- Space between characters (px). > 0 → wider spacing.
- Applies to non-karaoke only. Karaoke uses per-syllable marginRight.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
12. Sine Wave Amplitude (ADVANCED tab)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Biên độ nhấp nhô của hiệu ứng sine_wave (px). Mặc định 2.
- Càng cao, chữ nhảy càng mạnh.

- Sine wave bobbing amplitude (px). Default 2.
- Higher = more pronounced bounce.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
13. Footer Toggles (SETTINGS tab / footer panel)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- **Close on click outside:** Tự động đóng popup khi click ra ngoài.
- **Constrain to Video Frame:** Giữ phụ đề trong khung video thực tế
  (tránh thanh đen letterbox).
- **Sub Sources:** Quản lý nguồn GitHub để tự động tìm phụ đề.
- **Backup / Export / Import:** Sao lưu, xuất, nhập dữ liệu (toàn bộ cài đặt
  + phụ đề).

- **Close on click outside:** Auto-close popup when clicking outside.
- **Constrain to Video Frame:** Keep subtitles inside the actual video area
  (avoids letterbox bars).
- **Sub Sources:** Manage GitHub sources for auto subtitle fetching.
- **Backup / Export / Import:** Backup, export, import all data
  (settings + subtitles).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
14. Header Zoom & Opacity
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- **Zoom (1.0–1.3):** Phóng to / thu nhỏ toàn bộ popup.
- **Opacity:** Độ mờ nền popup.

- **Zoom (1.0–1.3):** Scale the entire popup UI.
- **Opacity:** Background transparency of the popup.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔧 Mẹo / Tips
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Muốn viền Aegisub chính xác: TẮT "Use Text-Stroke", TẮT "Deep Glow".
   → Outline 8 hướng cứng, giống Aegisub nhất.
2. Muốn viền mượt, glow đẹp: BẬT "Use Text-Stroke", tuỳ chọn BẬT "Deep Glow".
3. Nếu karaoke bị sai màu / outline: Kiểm tra tab KARAOKE — Pre/Active/Post.
   Active LÚC NÀO cũng dùng kActive, bất kể ⚙️.
4. Cài đặt riêng từng style: Bật ⚙️ ở STYLES → chỉnh S (size), O (outline),
   B (blur), màu 1c và 3c.
5. Hiệu ứng quá nhanh / chậm: Chỉnh "Effect Speed" ở ADVANCED tab.

1. For accurate Aegisub-like outline: Turn OFF "Use Text-Stroke", OFF "Deep Glow".
   → 8-direction hard shadow, closest to Aegisub.
2. For smooth outline + nice glow: Turn ON "Use Text-Stroke", optionally ON
   "Deep Glow".
3. If karaoke colors/outline are wrong: Check KARAOKE tab → Pre/Active/Post.
   Active ALWAYS uses kActive values regardless of ⚙️ override.
4. Per-style settings: Enable ⚙️ in STYLES → adjust S (size), O (outline),
   B (blur), colors 1c and 3c.
5. Effects too fast / slow: Adjust "Effect Speed" in ADVANCED tab.