import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { UserDashboard } from "./pages/UserSide/UserDashboard";
import { AdminDashboard } from "./pages/AdminSide/AdminDashboard";
import { CoursePage } from "./pages/UserSide/CoursePage";
import { ApplicationPage } from "./pages/UserSide/ApplicationPage";
import { ApplicationTrack } from "./pages/UserSide/ApplicationTrack";
import { AllApplications } from "./pages/AdminSide/AllApplications";
import { ManageCourses } from "./pages/AdminSide/ManageCourses";
import { ViewStudents } from "./pages/AdminSide/ViewStudents";

export function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/courses" element={<CoursePage/>} />
        <Route path="/application" element={<ApplicationPage/>} />
        <Route path="/track" element={<ApplicationTrack/>} />
        <Route path="/admin/applications" element={<AllApplications />} />
        <Route path="/admin/manage-courses" element={<ManageCourses />} />
        <Route path="/admin/students" element={<ViewStudents />} />
      </Routes>
    </BrowserRouter>
  );
}