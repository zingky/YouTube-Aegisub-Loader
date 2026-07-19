## 🚀 What's New in v8.1.1
- **DeepGlow applies to all 3 karaoke tabs (kPre, kActive, kPost):** Previously only worked on non-karaoke lines. Now karaoke syllable shadows also use the enhanced stacked glow layers.
- **Text-Stroke improvements:**
  - **Outline = 100%** of the scaled outline width (was 50%, then 85%). Crisp border at full strength.
  - **Default = OFF** (was ON). Outlines use the classic 8-direction text-shadow by default.
  - **When ON, shadow is blur-only glow:** The `ow` value spreads the blur radius wider instead of creating a hard 8-direction ring. No duplicate outline — clean modern look.
- **Karaoke Active fix:** Active syllables always use colors/outline/blur from the kActive tab, ignoring the per-style override toggle. Pre/Post syllables respect the override when active.
- **Karaoke scaleH fix:** All 3 karaoke tabs (kPre, kActive, kPost) now properly multiply outline and blur by `scaleH` (video height ÷ PlayResY), fixing oversized lines on high-resolution videos.
- **New `explanation.txt`:** Comprehensive guide explaining every toggle and slider in the extension, including text-stroke, deep glow, box mode, karaoke tabs, effect speed, and more — in both English and Vietnamese.

## 🚀 Có gì mới ở bản v8.1.1
- **DeepGlow tác động lên cả 3 tab karaoke (kPre, kActive, kPost):** Trước đây chỉ hoạt động trên dòng không karaoke. Giờ đây shadow của âm tiết karaoke cũng dùng các lớp glow xếp chồng mở rộng.
- **Cải thiện Text-Stroke:**
  - **Outline = 100%** độ rộng outline đã scale (trước là 50%, rồi 85%). Viền sắc nét ở cường độ tối đa.
  - **Mặc định = TẮT** (trước là BẬT). Outline dùng text-shadow 8 hướng cổ điển theo mặc định.
  - **Khi BẬT, shadow chỉ là glow mờ:** Giá trị `ow` làm lan rộng bán kính blur thay vì tạo vòng 8 hướng cứng. Không viền trùng lặp — diện mạo hiện đại, sạch sẽ.
- **Sửa lỗi Karaoke Active:** Âm tiết đang hát luôn dùng màu/outline/blur từ tab kActive, bỏ qua nút ghi đè style. Âm tiết Pre/Post tôn trọng ghi đè khi bật.
- **Sửa lỗi scaleH karaoke:** Cả 3 tab karaoke (kPre, kActive, kPost) giờ nhân outline và blur với `scaleH` (chiều cao video ÷ PlayResY) đúng cách, khắc phục viền quá dày trên video độ phân giải cao.
- **File `explanation.txt` mới:** Hướng dẫn toàn diện giải thích mọi nút bật/tắt và thanh trượt trong tiện ích, bao gồm text-stroke, deep glow, box mode, karaoke tabs, effect speed, v.v. — bằng cả tiếng Anh và tiếng Việt.

## 🚀 What's New in v8.1
- **ASS.js Rendering Engine:** Brand new rendering engine. Toggle between CSS engine and ASS.js via the CSS/ASS.js buttons in the header bar. ASS.js uses WebGL/Canvas for accurate ASS rendering comparable to dedicated players.
- **ASS Alignment + Margins Support (CSS Engine):** The CSS engine now reads `Alignment` (1–9) and `MarginL/R/V` from the ASS `[V4+ Styles]` section. Line-level `\an()`, `\pos()`, `\marginL/R/V()` overrides are also parsed. Subtitles render at the correct position as authored in Aegisub.
- **Default Font Size:** All styles now default to **25px** (was 23px).
- **Unused Style Filtering:** Styles with no subtitle lines are automatically hidden from the STYLES tab.
- **"Reset All" Button:** New `⟳ ALL` button next to STYLES header resets every style to its original ASS position, size (25), outline (2), blur (2), and colors.
- **Per-Style Reset Fix:** The reset button correctly restores the original ASS alignment-driven position, not the hardcoded center-bottom.
- **Bug Fixes:** Improved `\fscx`/`\fscy` support, legacy `\a` alignment mapping, and robust margin fallback for cached data.

## 🚀 Có gì mới ở bản v8.1
- **Engine ASS.js:** Engine render mới. Chuyển đổi giữa CSS engine và ASS.js qua nút CSS/ASS.js trên thanh tiêu đề. ASS.js dùng WebGL/Canvas để render ASS chính xác, tương tự các trình phát chuyên dụng.
- **Hỗ trợ Alignment + Margins (CSS Engine):** Engine CSS giờ đọc `Alignment` (1–9) và `MarginL/R/V` từ mục `[V4+ Styles]` trong ASS. Các ghi đè `\an()`, `\pos()`, `\marginL/R/V()` trên từng dòng cũng được phân tích. Phụ đề hiện đúng vị trí như trên Aegisub.
- **Cỡ chữ mặc định:** Tất cả style mặc định **25px** (trước là 23px).
- **Lọc Style không dùng:** Các style không có dòng Dialogue nào tự động ẩn khỏi tab STYLES.
- **Nút "Reset All":** Nút `⟳ ALL` cạnh tiêu đề STYLES reset tất cả style về vị trí ASS gốc, size (25), outline (2), blur (2) và màu sắc ban đầu.
- **Sửa Reset từng Style:** Nút reset từng style giờ khôi phục đúng vị trí từ Alignment + Margins gốc trong ASS.
- **Sửa lỗi:** Cải thiện hỗ trợ `\fscx`/`\fscy`, ánh xạ `\a` legacy sang ASS alignment, và fallback margin an toàn cho dữ liệu cache cũ.

## 🚀 What's New in v8.0
- **Per-Style Font from Aegisub:** Each subtitle style now uses its original font defined in the ASS file (when per-style toggle is ON). Unknown/unavailable fonts fall back to VNF-Comic Sans with a ⚠️ indicator.
- **Active Karaoke Colors are Configurable:** kActive tab 1c/3c can now be freely adjusted in the Karaoke settings panel (no longer hardcoded).
- **"All" → "Use Global Setting":** The master toggle above styles list is now clearly labeled.
- **Default 3c = Red:** Active karaoke outline color defaults to red when loading an ASS file for the first time.
- **Style Defaults:** All styles default to fontSize 23, outlineWidth 2, blur 2. Reset (⟳) restores original Aegisub colors + these defaults.
- **Style List Cleanup:** Old styles are cleared when a new ASS file is loaded.
- **Large Style Lists:** If more than 4 styles exist, the container switches to manual scrolling instead of auto-expanding.
- **Bug Fixes:** Outline parsing from Aegisub now reads the correct field (index 16), not Bold.

## 🚀 Có gì mới ở bản v8.0
- **Font riêng cho từng Style:** Mỗi style sub dùng đúng font gốc từ file ASS (khi bật tick ⚙️). Font lạ không có trong máy sẽ tự động fallback về VNF-Comic Sans và hiển thị ⚠️.
- **Màu Active Karaoke có thể chỉnh:** Tab kActive 1c/3c giờ có thể tuỳ chỉnh thoải mái trong bảng Karaoke (không còn hardcode nữa).
- **"All" → "Use Global Setting":** Nút gạt trên đầu danh sách style được đổi tên rõ ràng.
- **3c mặc định = màu Đỏ:** Màu viền active karaoke mặc định là đỏ khi load file ASS lần đầu.
- **Mặc định Style:** Tất cả style mặc định fontSize 23, outlineWidth 2, blur 2. Nút Reset (⟳) khôi phục màu gốc từ Aegisub + các giá trị mặc định này.
- **Xoá Style cũ:** Danh sách style được xoá sạch khi load file ASS mới.
- **Nhiều Style:** Khi có hơn 4 style, container chuyển sang scroll thủ công thay vì tự động mở rộng.
- **Sửa lỗi:** Đọc outline từ Aegisub đúng field (index 16), không còn bị lấy nhầm giá trị Bold.

## 🛠 Installation / Hướng dẫn cài đặt (v8.1.1)
1. Download `YouTube_Aegisub_Loader_v8.1.1.zip` and extract it. / Tải file `YouTube_Aegisub_Loader_v8.1.1.zip` và giải nén.
2. Go to `chrome://extensions/` and enable **Developer mode**. / Truy cập `chrome://extensions/` và bật **Chế độ nhà phát triển**.
3. Click **Load unpacked** and select the extracted folder. / Nhấn **Tải tiện ích đã giải nén** và chọn thư mục vừa giải nén.
4. Pin the extension to your toolbar. / Ghim tiện ích lên thanh công cụ.

## 🚀 What's New in v7.9.9
- **Multi-Source GitHub:** Add, remove, enable/disable multiple GitHub repos as subtitle sources. Results from all enabled sources are merged automatically.
- **Smart Search Dropdown:** Real-time file search with title-based relevance sorting. Shows matching files ranked by video title keywords.
- **Constrain to Video Frame:** Keeps subtitles inside the actual video area, avoiding black letterbox bars on 16:10/ultrawide monitors.
- **Overlap Prevention:** Automatically stacks overlapping subtitle lines with proper vertical spacing (respects `\pos()`).
- **Per-Style Reset (⟳):** Reset X, Y, Size, Outline, Blur to defaults for each style individually.
- **Per-Style Visibility:** Hide/unhide any subtitle style with 👁️ toggle.
- **Deep Glow:** Enhanced neon glow effect (Advanced tab).
- **Footer Settings Panel:** Quick toggles (close-on-click-outside, constrain-to-video) + Sub Sources manager + Data Backup/Export/Import.
- **Zoom & Opacity Sliders:** Adjust popup scale (1.0–1.3) and background opacity directly from header.
- **Draggable Divider:** Resize left/right panels by dragging the center divider.
- **YouTube Controls Compatible:** Subtitles render behind the controls bar, never blocking playback buttons.
- **Code Split:** Content script modularized into globals.js, parser.js, engine-css.js, ui.js, main.js for better maintainability.

## 🚀 Có gì mới ở bản v7.9.9
- **Đa nguồn GitHub:** Thêm, xoá, bật/tắt nhiều kho GitHub làm nguồn phụ đề. Kết quả từ tất cả nguồn đang bật được trộn tự động.
- **Thanh tìm kiếm thông minh:** Tìm file theo thời gian thực, sắp xếp theo độ liên quan đến tiêu đề video.
- **Giới hạn trong khung video:** Giữ phụ đề bên trong vùng video thực tế, tránh thanh viền đen trên màn hình 16:10 hoặc siêu rộng.
- **Chống chồng dòng:** Tự động xếp các dòng phụ đề chồng lấn với khoảng cách dọc hợp lý (tôn trọng `\pos()`).
- **Reset từng Style (⟳):** Đặt lại X, Y, Size, Outline, Blur về mặc định cho từng style riêng lẻ.
- **Ẩn/Hiện từng Style:** Dùng 👁️ để ẩn hoặc hiện bất kỳ style phụ đề nào.
- **Deep Glow:** Hiệu ứng phát sáng neon mạnh mẽ (tab Advanced).
- **Bảng cài đặt chân trang:** Bật/tắt nhanh (close-on-click-outside, constrain-to-video) + Quản lý nguồn Sub + Sao lưu/Xuất/Nhập dữ liệu.
- **Thanh trượt Zoom & Opacity:** Điều chỉnh tỉ lệ popup (1.0–1.3) và độ mờ nền trực tiếp từ tiêu đề.
- **Thanh chia kéo được:** Thay đổi kích thước bảng trái/phải bằng cách kéo thanh chia giữa.
- **Tương thích điều khiển YouTube:** Phụ đề hiển thị phía sau thanh điều khiển, không bao giờ chặn nút phát lại.
- **Phân tách Code:** Content script được chia thành globals.js, parser.js, engine-css.js, ui.js, main.js để dễ bảo trì.

## 🚀 What's New in v7.9
- **Auto-Sync Engine:** Automatically fetches subtitles from GitHub based on YouTube Video ID.
- **Enhanced UI:** Clean, horizontal Glassmorphism interface.
- **Advanced Karaoke:** Supports 3-tab configuration (Pre/Active/Post) with Smooth Zoom effects.
- **Font Support:** Built-in VNF-Comic Sans and standard Windows fonts.
- **ID Display:** Shows current Video ID for easier management.
- **Smart Cache:** Saves all settings per Video ID locally.

## 🚀 Có gì mới ở bản v7.9
- **Tự động đồng bộ:** Tự động tìm và nạp phụ đề từ GitHub theo ID Video.
- **Giao diện tối ưu:** Menu ngang phong cách kính mờ hiện đại, dễ thao tác.
- **Karaoke chuyên sâu:** Cài đặt 3 trạng thái (Pre/Active/Post) với hiệu ứng Phóng to (Zoom) mượt mà.
- **Hỗ trợ Font:** Tích hợp VNF-Comic Sans và các font tiếng Việt chuẩn Windows.
- **Hiển thị ID:** Hiện ID video trực tiếp trên menu để dễ quản lý.
- **Ghi nhớ thông minh:** Lưu lại mọi tùy chỉnh theo từng video riêng biệt.

## 🛠 Installation / Hướng dẫn cài đặt (v7.9)
1. Download `YouTube_Aegisub_Loader_v7.9.zip` and extract it. / Tải file `YouTube_Aegisub_Loader_v7.9.zip` và giải nén.
2. Go to `chrome://extensions/` and enable **Developer mode**. / Truy cập `chrome://extensions/` và bật **Chế độ nhà phát triển**.
3. Click **Load unpacked** and select the extracted folder. / Nhấn **Tải tiện ích đã giải nén** và chọn thư mục vừa giải nén.
4. Pin the extension to your toolbar. / Ghim tiện ích lên thanh công cụ.