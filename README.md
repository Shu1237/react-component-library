# react-component-library

Thư viện các component React tái sử dụng, được phát triển bởi Shu1237.

## 🚀 Cài đặt

```bash
npm install shu1237-react-components
```

## 🛠 Sử dụng

```jsx
import { Button, Card, Input, Toast, Badge } from 'shu1237-react-components';

function App() {
  return (
    <Button variant="primary" size="large">Click me</Button>
  );
}
```

## 📦 Các component
- **Button**: Nút bấm với nhiều kiểu (primary, secondary, outline, danger), nhiều size, hỗ trợ disabled, custom class.
- **Card**: Thẻ chứa nội dung, có title, shadow, padding.
- **Input**: Ô nhập liệu, hỗ trợ label, error, helperText, size, variant, fullWidth.
- **Toast**: Thông báo popup, hỗ trợ variant, autoClose, showCloseButton.
- **Badge**: Nhãn nhỏ, nhiều màu, nhiều size.

## 🎨 Lưu ý về style
- Thư viện sử dụng class của Tailwind CSS. Để style hoạt động, **dự án sử dụng cũng phải cài đặt và cấu hình Tailwind CSS**.
- Thêm đường dẫn tới thư viện vào `tailwind.config.js`:

```js
content: [
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/shu1237-react-components/dist/**/*.{js,ts,jsx,tsx}"
],
```

## 🧑‍💻 Phát triển/thử nghiệm
- Chạy Storybook:
  ```bash
  npm run storybook
  ```
- Build thư viện:
  ```bash
  npm run build
  ```
- Chạy test:
  ```bash
  npm run test
  ```

## 📄 License
MIT

---

**Mọi ý kiến đóng góp hoặc báo lỗi, vui lòng tạo issue trên GitHub!**

