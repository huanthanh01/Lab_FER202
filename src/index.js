import React from "react";
import { createRoot } from "react-dom/client"; // Import từ 'react-dom/client' thay vì 'react-dom'
import App from "./components/App";
import "./styles/App.css"; // File CSS bạn vừa sửa ở bước trước
import HelloWorld from "./components/HelloWorld.jsx";

// Tìm phần tử DOM gốc trong file index.html
const container = document.getElementById("root");

// Tạo một root chuyên dụng cho React
const root = createRoot(container);

// Render ứng dụng của bạn vào root đó
root.render(
  <React.StrictMode>
    <App />
    <HelloWorld />
  </React.StrictMode>,
);
