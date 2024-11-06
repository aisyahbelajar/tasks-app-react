import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EditProfile, TodoPage, SignInPage } from "../pages"; // Mengimpor dari index.jsx

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EditProfile />} />
        <Route path="/tasks" element={<TodoPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
