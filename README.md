# 🧧 Rút Thăm Bao Lì Xì - Vận May Trời Phú
### Tết Bính Ngọ 2026 🐴

Một ứng dụng web mini-game vui nhộn dành cho dịp Tết, cho phép người chơi rút thăm bao lì xì may mắn với giao diện đẹp mắt, hiệu ứng sống động và tính năng **"Nhà Cái"** giúp bạn kiểm soát ngân sách lì xì một cách thông minh.

---

## ✨ Tính Năng Nổi Bật

- 🎨 **Giao diện Tết rực rỡ:** Thiết kế với tông màu Đỏ - Vàng chủ đạo, hiệu ứng hoa đào rơi và font chữ thư pháp.
- 🃏 **Hiệu ứng 3D:** Lật mở bao lì xì mượt mà với CSS 3D Transform.
- 🎵 **Âm thanh sống động:** Tích hợp nhạc nền Tết và hiệu ứng âm thanh khi lật bài/trúng thưởng.
- 🏦 **Hệ thống "Nhà Cái" thông minh:**
  - Tùy chỉnh tỷ lệ trúng thưởng (Weight).
  - Khống chế giải lớn: Cơ chế "bẻ kèo" giúp hạn chế tối đa việc trúng giải to liên tục.
  - Giới hạn lượt chơi (Turn limit).
- 📊 **Thống kê:** Theo dõi tổng số tiền đã nhận và lịch sử rút thăm.
- 📱 **Responsive:** Chạy tốt trên cả điện thoại và máy tính.
- 🖼️ **Icon hiện đại:** Sử dụng bộ icon Lucide sắc nét.

---

## 🛠️ Công Nghệ Sử Dụng

| Công nghệ | Mô tả |
|---|---|
| HTML5 / CSS3 | Nền tảng giao diện |
| Tailwind CSS (v3 CDN) | Xử lý giao diện nhanh chóng |
| Vanilla JavaScript | Xử lý logic game |
| AOS (Animate On Scroll) | Hiệu ứng xuất hiện |
| Canvas Confetti | Hiệu ứng pháo hoa giấy |
| Lucide Icons | Bộ icon vector nhẹ và đẹp |

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy

Dự án này là **Single File HTML**, nghĩa là bạn không cần cài đặt Node.js hay server phức tạp.

1. Tải file `index.html` về máy.
2. Mở file `index.html` bằng bất kỳ trình duyệt web nào (Chrome, Edge, Safari, Firefox...).
3. Bắt đầu chơi! 🎉

---

## ⚙️ Cấu Hình "Nhà Cái" (Quan Trọng)

Để chỉnh sửa tỷ lệ, số tiền và lượt chơi, hãy mở file `index.html` bằng trình soạn thảo code (VS Code, Notepad++...) và tìm đến đoạn `const CONFIG_DATA` (khoảng dòng 380).

```javascript
const CONFIG_DATA = {
    // 1. Số lượt chơi mặc định cho mỗi người
    initialTurns: 3,

    // 2. Ngưỡng giá trị được coi là "Giải to" (để kích hoạt bộ lọc bảo vệ)
    highValueThreshold: 50000,

    // 3. Tỷ lệ "Bẻ kèo" của nhà cái khi người chơi trúng giải to
    // 0.7 nghĩa là: Nếu quay trúng giải to, có 70% bị đổi thành "Lời chúc", chỉ 30% ăn thật.
    houseEdgeProbability: 0.7,

    // 4. Danh sách giải thưởng
    prizes: [
        {
            id: 1,
            text: "10.000 VNĐ",
            value: 10000,
            weight: 40, // Trọng số càng cao càng dễ trúng
            message: "Lộc nhỏ đầu năm!",
            icon: "coins"
        },
        // ... các giải khác
    ]
};
```

### Cách chỉnh tỷ lệ trúng:

- ⬆️ Tăng `weight` cho giải nhỏ (10k, 20k) hoặc ô "Lời Chúc".
- ⬇️ Giảm `weight` cho giải to (100k, 500k) xuống thấp (ví dụ: `0.1`).
- 🔒 Tăng `houseEdgeProbability` lên gần `1.0` nếu bạn muốn "chắc cốp" không mất giải to.

---

## 🎨 Tùy Biến Lời Chúc

Tìm mảng `const HORSE_YEAR_WISHES` trong code để thêm hoặc sửa các câu chúc Tết Bính Ngọ:

```javascript
const HORSE_YEAR_WISHES = [
    "Mã đáo thành công!",
    "Tiền vào như nước!",
    // Thêm câu chúc của bạn vào đây
];
```

---

## 🎵 Thay Đổi Nhạc Nền

Tìm thẻ `<audio>` trong file HTML và thay đổi đường dẫn `src`:

```html
<audio id="bgMusic" loop>
    <!-- Thay link nhạc của bạn vào đây (file .mp3) -->
    <source src="./nhac-tet-cua-ban.mp3" type="audio/mpeg">
</audio>
```

---

## 📝 License

Dự án được tạo ra với mục đích vui vẻ ngày Tết. Thoải mái sử dụng và chia sẻ! 🎊

---

> 🐴🧧 **Chúc mừng năm mới Bính Ngọ 2026!** 🧧🐴  
> *Mã đáo thành công - Vạn sự như ý - Tiền tài dồi dào!*
