import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EditProfile, TaskPage, SignInPage } from "../pages"; // Mengimpor dari index.jsx

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EditProfile />} />
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
