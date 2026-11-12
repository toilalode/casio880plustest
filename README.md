# Casio fx-880BTG PLUS (web)

Máy tính Casio fx-880BTG PLUS mô phỏng bằng 1 file HTML, chạy được như app (PWA) trên điện thoại, dùng offline.

- Đã bỏ chức năng **Tra cứu nguyên tố** (mục trong TOOLS). Bảng tuần hoàn và Khối lượng nguyên tử (CATALOG) vẫn giữ.
- Hỗ trợ cài vào màn hình chính (Android/Chrome, iOS/Safari: Chia sẻ → Thêm vào MH chính).

## Cài đặt và lưu trữ

- Bấm nút ⚙ (SETTINGS) để đổi: góc, kiểu xuất, định dạng, số chữ số, phân số, dấu thập phân, phân cách nghìn, số phức, ngôn ngữ.
- **Cài đặt được lưu sẵn trong máy** (localStorage của trình duyệt, khóa `casio880-state`): mở lại vẫn giữ nguyên, không cần chỉnh lại.
- Mục **Storage / Lưu trữ** (trong Settings):
  - Tự động lưu: bật thì biến (A, B, x...) và Ans cũng được lưu cùng cài đặt.
  - Xem số biến đang dùng và dung lượng đã lưu.
  - Xóa biến, hoặc xóa toàn bộ dữ liệu lưu (về mặc định).
- **Reset settings** đặt lại các cài đặt về mặc định.
- Dữ liệu chỉ nằm trên thiết bị/trình duyệt đang dùng, xóa dữ liệu trang web thì mất.

## Phím

- **CALC** nằm bên phải phím phân số; **SHIFT + CALC** là **SOLVE**.
- **CATALOG** giữ Hằng số khoa học và Chuyển đổi đơn vị.

## Debug (Eruda)

Máy tải [Eruda](https://github.com/liriliri/eruda) (console, network, storage...) từ CDN và hiện nút bánh răng nổi trên màn hình. Mặc định **bật**; tắt/bật ở **Settings → Debug (Eruda)** (cũng được lưu). Cần mạng ở lần tải đầu, offline thì Eruda không hiện nhưng máy vẫn chạy bình thường.

## Cấu trúc

| File | Vai trò |
|---|---|
| `index.html` | Toàn bộ máy tính |
| `manifest.webmanifest` | Cấu hình PWA |
| `sw.js` | Service worker (offline) |
| `icon.svg`, `icon-maskable.svg` | Icon gốc (thường và maskable) |
| `.github/workflows/pages.yml` | Deploy GitHub Pages, tự tạo icon PNG từ SVG |

Các icon PNG (`icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png`) được tạo tự động khi deploy.

## Deploy

Vào **Settings → Pages → Build and deployment → Source: GitHub Actions**, sau đó push lên `main` là tự deploy.

Link: https://toilalode.github.io/casio880plustest/
