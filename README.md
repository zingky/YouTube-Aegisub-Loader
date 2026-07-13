# 🎬 YouTube Aegisub Loader v8.1

A simple Chrome Extension to load and display Aegisub subtitles (.ass) on YouTube with karaoke support, per-style settings, CSS/ASS.js dual engine (ASS.js is experimental), and GitHub source management.
<img width="1412" height="859" alt="image" src="https://github.com/user-attachments/assets/7e7ef8ce-47b8-4248-9e89-1eeb751fcbc1" />
[Tiếng Việt bên dưới](#tiếng-việt)

---

## Features

- **Load .ass files** from your computer or auto-fetch from GitHub repositories based on Video ID
- **Dual Rendering Engines:** CSS (HTML/CSS-based, default) or ASS.js (weizhenye/ASS, WebGL/Canvas accelerated, experimental). Toggle via header buttons.
- **Multi-Source:** Add multiple GitHub repos as subtitle sources; merge results automatically
- **Smart Search:** Real-time file search with title-based relevance sorting
- **Basic Karaoke:** Three-state karaoke (Pre/Active/Post) with syllable-level effects using `\k` tags
- **Style Settings:** Global control over font size, outline, blur, text color, outline color
- **Per-Style Override:** Customize position (X, Y), size, outline, blur for each style individually
- **ASS Alignment + Margins:** CSS engine correctly reads Alignment (1-9) and MarginL/R/V from ASS styles and line-level `\an()`, `\pos()`, `\margin()` overrides
- **Overlap Prevention:** Auto-stack overlapping subtitle lines (respects `\pos()`)
- **Constrain to Video Frame:** Keep subtitles inside the actual video area, avoiding letterbox bars
- **UI Settings:** Draggable/resizable popup, zoom/opacity sliders, pill tabs (Settings ⚙️ / Karaoke 🎤 / Advanced 🛠️)
- **Footer Panel:** Quick toggles + Sub Sources manager + Data Import/Export/Backup
- **Local Storage:** Remembers settings, sources, and subtitle cache per Video ID
- **Fullscreen:** Font automatically adjusts (+10px) in fullscreen mode
- **YouTube Controls:** Subtitles render behind the controls bar, never blocking playback buttons

---

## ⚠️ Note

This extension uses **CSS rendering** as the default engine (HTML/CSS-based, supports basic to intermediate ASS features). An experimental **ASS.js** engine (weizhenye/ASS, WebGL/Canvas accelerated) is also available — toggle via the CSS/ASS.js buttons in the header bar. ASS.js is in beta; CSS mode is recommended for daily use.

---

## Installation (Developer Mode)

1. **Download** or clone this repository.
2. Ensure `vnf-comic-sans.ttf` is in the `extension/` folder.
3. Open Chrome → `chrome://extensions/`.
4. Enable **Developer mode** (top right).
5. Click **Load unpacked** and select the `extension/` folder.
6. Visit any YouTube video → **SUB** button appears in the player controls.

---

<a name="tiếng-việt"></a>
# 🎬 YouTube Aegisub Loader v8.1 (Bản Tiếng Việt)

Một tiện ích Chrome để tải và hiển thị phụ đề Aegisub (.ass) trên YouTube, hỗ trợ karaoke, tùy chỉnh từng style, song song 2 engine CSS/ASS.js (ASS.js đang thử nghiệm), và quản lý nhiều nguồn GitHub.

---

## Tính năng

- **Tải file .ass** từ máy tính hoặc tự động lấy từ GitHub dựa trên ID video
- **Song song 2 Engine:** CSS (dùng HTML/CSS, mặc định) hoặc ASS.js (weizhenye/ASS, WebGL/Canvas, thử nghiệm). Chuyển đổi qua nút trên thanh tiêu đề.
- **Đa nguồn:** Thêm nhiều kho GitHub làm nguồn sub; tự động gộp kết quả
- **Tìm kiếm thông minh:** Tìm file realtime, sắp xếp theo độ liên quan với tiêu đề video
- **Karaoke cơ bản:** Ba trạng thái (Pre/Active/Post) với hiệu ứng từng âm tiết qua tag `\k`
- **Chỉnh style:** Cỡ chữ, viền, blur, màu chữ (1c), màu viền (3c)
- **Ghi đè từng Style:** Tùy chỉnh vị trí (X, Y), cỡ chữ, viền, blur riêng cho từng style
- **ASS Alignment + Margins:** Engine CSS đọc đúng Alignment (1-9) và MarginL/R/V từ style ASS và các ghi đè `\an()`, `\pos()`, `\margin()` trên từng dòng
- **Chống chồng chéo:** Tự động dãn các dòng sub trùng vị trí (tôn trọng `\pos()`)
- **Giới hạn khung hình:** Giữ sub trong vùng video thực tế, tránh tràn ra viền đen
- **Giao diện:** Popup kéo/thả được, thanh trượt zoom/độ mờ, pill tab (Settings ⚙️ / Karaoke 🎤 / Advanced 🛠️)
- **Footer Panel:** Bật/tắt nhanh + quản lý nguồn Sub + sao lưu/xuất/nhập dữ liệu
- **Lưu trữ:** Ghi nhớ cài đặt, nguồn, cache sub theo từng Video ID
- **Fullscreen:** Tự động tăng cỡ chữ (+10px)
- **Nút điều khiển:** Sub hiển thị bên dưới thanh controls, không che nút bấm

---

## ⚠️ Lưu ý

Tiện ích dùng **CSS rendering** làm engine mặc định (dùng HTML/CSS, hỗ trợ hiệu ứng từ cơ bản đến trung cấp). Engine **ASS.js** (weizhenye/ASS, WebGL/Canvas) đang ở chế độ thử nghiệm — chuyển đổi qua nút CSS/ASS.js trên thanh tiêu đề. Nên dùng CSS mode hàng ngày, ASS.js chỉ để thử nghiệm.

---

## Cài đặt (Chế độ nhà phát triển)

1. **Tải về** hoặc clone repository này.
2. Đảm bảo file `vnf-comic-sans.ttf` nằm trong thư mục `extension/`.
3. Mở Chrome → `chrome://extensions/`.
4. Bật **Chế độ nhà phát triển** (góc trên phải).
5. Nhấn **Tải tiện ích đã giải nén** và chọn thư mục `extension/`.
6. Vào YouTube → nút **SUB** xuất hiện trên thanh điều khiển player.

---

## Credits

- Developed by **Gemini** & **Kull**
- Repository: [https://github.com/zingky/Kull-Vietsub](https://github.com/zingky/Kull-Vietsub)
