# Hướng dẫn chạy dự án Mộc Huế

Dự án này sử dụng kiến trúc modular (tải các file HTML từ thư mục `modules/` thông qua JavaScript), vì vậy bạn **không thể** chạy bằng cách nhấp đúp trực tiếp vào file `index.html`. Bạn cần một máy chủ cục bộ (Local Server) để chạy.

Dưới đây là 2 cách đơn giản nhất:

## Cách 1: Sử dụng VS Code (Khuyên dùng)
1. Mở thư mục `MocHue-main` bằng **Visual Studio Code**.
2. Cài đặt Extension có tên là **"Live Server"** (của Ritwick Dey).
3. Sau khi cài đặt, bạn nhìn xuống góc dưới cùng bên phải của VS Code, nhấn vào nút **"Go Live"**.
4. Trình duyệt sẽ tự động mở trang web của bạn tại địa chỉ `http://127.0.0.1:5500`.

## Cách 2: Sử dụng Terminal (Nhanh)
1. Mở Terminal (PowerShell hoặc Command Prompt) tại thư mục của dự án.
2. Nhập lệnh sau và nhấn Enter:
   ```bash
   npx serve
   ```
3. Sau khi lệnh chạy, nó sẽ cung cấp cho bạn một địa chỉ (thường là `http://localhost:3000`). Bạn hãy copy địa chỉ đó dán vào trình duyệt.

---
**Lưu ý:** Mình đã sửa lại các đường dẫn ảnh trong file `app.js` để đảm bảo ảnh hiển thị đúng trên máy tính của bạn.
