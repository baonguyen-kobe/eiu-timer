# EIU Timer Pro - Advanced Timer Manager

## 🎯 Tổng Quan

**EIU Timer Pro** là ứng dụng quản lý timer hiện đại và mạnh mẽ được xây dựng dựa trên những điểm mạnh của App 1 và App 2, với nhiều cải tiến và tính năng mới.

## ✨ Tính Năng Chính

### 1. **Ba Chế Độ Timer**![1764653988593](image/README/1764653988593.png)![1764653990284](image/README/1764653990284.png)![1764653991786](image/README/1764653991786.png)![1764653993293](image/README/1764653993293.png)![1764653994495](image/README/1764653994495.png)![1764654004317](image/README/1764654004317.png)

- ⏱️ **Countdown**: Đếm ngược từ thời gian đặt trước
- ⏲️ **Count-up**: Đếm lên từ 0
- 🎯 **Target Time**: Đếm ngược đến một giờ cụ thể trong ngày

### 2. **Quick Presets**

- 🍅 Pomodoro (25 phút)
- ☕ Short Break (5 phút)
- 🌴 Long Break (15 phút)
- 💪 Exercise (30 phút)
- 🧘 Meditation (10 phút)
- 📚 Reading (20 phút)

### 3. **Phân Loại Timer**

- 🏢 Công việc
- 📚 Học tập
- 💪 Sức khỏe
- 👤 Cá nhân
- 📌 Khác

### 4. **Điều Chỉnh Thời Gian**

- Nút +1m, +5m, -1m để điều chỉnh nhanh
- Hoạt động ngay cả khi timer đang chạy

### 5. **Âm Thanh & Thông Báo**

- 🔊 Âm thanh beep khi hoàn thành (Web Audio API)
- 🔔 Thông báo trình duyệt (Notifications API)
- Có thể bật/tắt riêng cho từng timer

### 6. **Import/Export**

- 📥 Import timers từ file JSON
- 📤 Export tất cả timers
- Tự động tạo ID mới khi import để tránh trùng lặp

### 7. **Thống Kê**

- 📊 Tổng số timer
- ⚡ Timer đang chạy
- ✅ Hoàn thành hôm nay
- ⏱️ Tổng thời gian tập trung

### 8. **Keyboard Shortcuts**

- `N` - Tạo timer mới
- `P` - Toggle presets
- `Ctrl+S` - Xem thống kê
- `Esc` - Đóng modal

### 9. **Web Worker**

- Tính toán timer chính xác trong background thread
- Không bị ảnh hưởng bởi tab switching
- Update mượt mà (100ms tick rate)

### 10. **Giao Diện**

- 🎨 Dark theme hiện đại
- 📱 Responsive design
- ✨ Smooth animations
- 🌈 Gradient colors và glass morphism effects

## 🏗️ Kiến Trúc

### Cấu Trúc File

```
App 3/
├── index.html      # Giao diện chính
├── style.css       # Styling với CSS Variables
├── app.js          # Logic chính (main thread)
├── worker.js       # Web Worker cho tính toán timer
└── README.md       # Tài liệu này
```

### Công Nghệ Sử Dụng

#### **HTML5**

- Semantic HTML
- Template element
- Form validation
- Time input

#### **CSS3**

- CSS Variables (custom properties)
- CSS Grid & Flexbox
- Animations & Transitions
- Gradient backgrounds
- Glass morphism effects
- Media queries cho responsive

#### **JavaScript (ES6+)**

- Modules (type="module")
- Web Workers API
- Web Audio API
- Notifications API
- LocalStorage API
- Map & Set collections
- Async/await
- Template literals
- Destructuring
- Arrow functions

### Design Patterns

1. **Module Pattern**: Code được tổ chức thành modules rõ ràng
2. **Event-Driven**: Sử dụng event listeners và callbacks
3. **State Management**: Centralized state với Map
4. **Worker Pattern**: Offload tính toán nặng sang Web Worker
5. **MVC-like**: Tách biệt data (timers), view (DOM), và logic (handlers)

## 🔧 Cách Sử Dụng

### Cài Đặt

Không cần cài đặt! Chỉ cần mở `index.html` trong trình duyệt hiện đại.

### Tạo Timer Mới

1. Click nút "➕ New Timer"
2. Điền thông tin:
   - Tên timer
   - Danh mục (tùy chọn)
   - Chế độ (countdown/countup/target)
   - Thời lượng hoặc giờ đích
   - Bật/tắt âm thanh và thông báo
3. Click "Tạo Timer"

### Sử Dụng Preset

1. Click "📋 Presets" để mở danh sách
2. Click vào preset muốn sử dụng
3. Timer sẽ được tạo tự động

### Điều Khiển Timer

- **▶️ Start**: Bắt đầu timer
- **⏸️ Pause**: Tạm dừng
- **🔄 Reset**: Đặt lại về ban đầu
- **+1m/+5m/-1m**: Điều chỉnh thời gian
- **✏️**: Chỉnh sửa
- **🗑️**: Xóa

### Import/Export

- **Export**: Click "📤" để tải file JSON
- **Import**: Click "📥" và chọn file JSON đã export

## 📊 So Sánh với App 1 & App 2

### Điểm Mạnh kế thừa từ App 1

✅ Class-based architecture rõ ràng  
✅ Đơn giản, dễ hiểu  
✅ LocalStorage persistence

### Điểm Mạnh kế thừa từ App 2

✅ Web Worker cho độ chính xác cao  
✅ Dark theme hiện đại  
✅ Import/Export functionality  
✅ Progress bar animation

### Cải Tiến Mới trong App 3

🆕 Quick presets  
🆕 Timer categories  
🆕 Statistics tracking  
🆕 Keyboard shortcuts  
🆕 Notifications API  
🆕 Better mobile responsive  
🆕 Glass morphism design  
🆕 Smooth animations  
🆕 Better error handling  
🆕 Auto-save state

## 🐛 Bug Fixes

### Lỗi đã sửa từ App 1

- ❌ File reference sai (`script.js` → `code.gs`)
- ❌ Không có âm thanh thực tế (thêm Web Audio API)
- ❌ Không hỗ trợ thời gian âm (đã fix format)

### Lỗi đã sửa từ App 2

- ❌ Import có thể gây duplicate ID (đã tạo ID mới)
- ❌ Completion flag timing issue (dùng Map với timestamp)

## 🎨 Theme & Styling

### Color Palette

- **Primary**: `#6366f1` (Indigo)
- **Secondary**: `#8b5cf6` (Purple)
- **Success**: `#10b981` (Green)
- **Danger**: `#ef4444` (Red)
- **Warning**: `#f59e0b` (Amber)
- **Info**: `#3b82f6` (Blue)

### Dark Theme

- **Background**: Gradient from `#0a0e1a` to `#0f1419`
- **Card**: `#16191f`
- **Text**: `#f1f5f9`

## 🚀 Performance

- **Web Worker**: Timer calculations không block UI thread
- **Efficient Rendering**: Chỉ update DOM khi cần thiết
- **LocalStorage**: Auto-save với debounce
- **Smooth Animations**: CSS transitions với GPU acceleration
- **Lazy Loading**: Modals chỉ render khi cần

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Edge 90+
- ✅ Safari 14+
- ✅ Opera 76+

### Required APIs

- Web Workers
- Web Audio API
- Notifications API (optional)
- LocalStorage
- CSS Grid & Flexbox

## 🔮 Tính Năng Tương Lai (Roadmap)

- [ ] Dark/Light theme toggle
- [ ] Multiple timer groups/workspaces
- [ ] Timer templates
- [ ] Sound customization
- [ ] Cloud sync
- [ ] Mobile app (PWA)
- [ ] Timer sharing
- [ ] Advanced statistics (charts, graphs)
- [ ] Pomodoro auto-cycle
- [ ] Desktop notifications với actions

## 📝 License

MIT License - Free to use and modify

## 👨‍💻 Phát Triển

Được phát triển dựa trên 2 phiên bản trước với nhiều cải tiến về:

- Architecture
- User Experience
- Performance
- Features
- Code quality

---

**Tạo bởi**: EIU Timer Team  
**Version**: 3.0.0  
**Ngày phát hành**: December 2025
