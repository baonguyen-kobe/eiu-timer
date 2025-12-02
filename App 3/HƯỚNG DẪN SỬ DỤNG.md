# 🚀 HƯỚNG DẪN SỬ DỤNG - EIU Timer Pro

## ⚠️ QUAN TRỌNG: Không thể mở trực tiếp file HTML!

Do **CORS Policy** của trình duyệt, bạn PHẢI chạy local server để app hoạt động.

---

## 📌 Cách Khởi Động Nhanh Nhất

### ✨ CÁCH 1: Double-click file `EIU-Timer-Portable.bat` hoặc `start.bat`

**Ứng dụng sẽ tự động:**

1. ✅ Kiểm tra Python
2. ✅ Khởi động server
3. ✅ Tự động mở trình duyệt
4. ✅ Sẵn sàng sử dụng!

**Lưu ý:**

- KHÔNG ĐÓNG cửa sổ Command Prompt khi đang dùng
- Nhấn phím bất kỳ trong cửa sổ đó để thoát

---

## 🔧 Nếu Không Có Python

### Cách A: Cài Python từ Microsoft Store (KHÔNG CẦN ADMIN)

1. Mở **Microsoft Store**
2. Tìm "**Python**"
3. Nhấn "**Cài đặt**"
4. Sau khi cài xong, chạy file `start.bat`

✅ **Cách này không cần quyền Administrator!**

### Cách B: Dùng VSCode Live Server

```
http://localhost:8000
```

### Bước 3: Sử dụng app

✅ App sẽ hoạt động bình thường!

### Bước 4: Thoát

Khi muốn tắt server, quay lại cửa sổ đen và:

- Nhấn `Ctrl + C`
- Hoặc đóng cửa sổ

---

## 🛠️ Cách Khác (Nếu start.bat không chạy)

### Dùng Python Command

1. Mở **Command Prompt** hoặc **Terminal**
2. Dùng lệnh `cd` để vào thư mục `App 3`
3. Chạy lệnh:
   ```bash
   python -m http.server 8000
   ```
4. Mở trình duyệt và vào `http://localhost:8000`

### Dùng VSCode Live Server

1. Mở VSCode
2. Cài extension "Live Server"
3. Mở thư mục `App 3`
4. Chuột phải vào file `index.html` → "Open with Live Server"

---

## 📁 File Cần Thiết

**GIỮ NGUYÊN 4 FILE NÀY TRONG CÙNG THƯ MỤC:**

```
App 3/
├── index.html      ← File giao diện
├── app.js          ← Code logic
├── style.css       ← Giao diện
├── worker.js       ← Timer chạy ngầm
└── start.bat       ← File khởi động
```

---

## ❓ Khắc Phục Sự Cố

### "Python không được nhận diện"

→ Cài Python từ [python.org](https://python.org) hoặc Microsoft Store

### "start.bat không chạy"

→ Dùng cách thủ công với lệnh python ở trên

### "Trang web không tải"

→ Kiểm tra xem server có đang chạy không (cửa sổ đen vẫn mở)

### "File HTML mở nhưng trắng xóa"

→ Đừng mở trực tiếp file HTML! Phải dùng server như hướng dẫn

---

## ✨ Tính Năng Chính

- ⏱️ Đếm Ngược / Đếm Lên
- 🎨 7 Theme màu sắc
- 🔊 Âm thanh tùy chỉnh
- 📱 Thông báo desktop
- 💾 Mẫu timer có sẵn
- 🌐 Tiếng Việt / English
- 📊 Trình chiếu toàn màn hình
- 📥 Import/Export Excel

---

**Made with ❤️ for EIU**
