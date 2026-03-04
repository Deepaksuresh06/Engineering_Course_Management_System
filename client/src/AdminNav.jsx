import "./AdminNav.css";
import { useNavigate } from "react-router-dom"; 

export function AdminNav(){
    const navigate = useNavigate();
    return(
        <nav className="admin-nav">
            <span className="nav-title">Engineering Admission System</span>
            <a href="/dashboard">Dashboard</a>
            <a href="/admin/applications">View Applications</a>
            <a href="/admin/manage-courses">Manage Courses</a>
            <a href="/admin/students">View Students</a>
            <button className="logout-button" onClick={() => {navigate("/");}}>Logout</button>
        </nav>
    );
}