import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./config/routes";
import "./index.css"; // Pastikan Anda menggunakan AppRoutes yang sudah benar

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
