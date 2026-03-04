import "./Navigation.css";
import { useNavigate } from "react-router-dom";

export function Navigation() {
    const navigate = useNavigate();

    return (
        <nav className="nav">
            <span className="nav-title">Engineering Admission System</span>
            <a href="/">Login</a>
            <a href="/register">Register</a>
            <a href="/dashboard">Dashboard</a> 
            <button className="logout-button" onClick={() => {navigate("/");}}>Logout</button>
        </nav>
    );
}