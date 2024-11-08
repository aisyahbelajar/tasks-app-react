import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EditProfile, TaskPage, SignInPage } from "../pages"; // Mengimpor dari index.jsx

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/edit" element={<EditProfile />} />
        <Route path="/tasks" element={<TaskPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
