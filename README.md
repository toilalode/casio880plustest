# Casio fx-880BTG PLUS (web)

Máy tính Casio fx-880BTG PLUS mô phỏng bằng 1 file HTML, chạy được như app (PWA) trên điện thoại, dùng offline.

- Đã bỏ chức năng **Tra cứu nguyên tố** (mục trong TOOLS). Bảng tuần hoàn và Khối lượng nguyên tử (CATALOG) vẫn giữ.
- Hỗ trợ cài vào màn hình chính (Android/Chrome, iOS/Safari: Chia sẻ → Thêm vào MH chính).

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
