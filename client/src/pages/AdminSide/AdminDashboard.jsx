import { AdminNav } from "../../AdminNav";
import "../../styles/AdminSide/AdminDashboard.css";
import { useNavigate } from "react-router-dom"; 

export function AdminDashboard(){
    const navigate = useNavigate();
    return(
        <div>
        <AdminNav />
        <div className="dashboard-container">
            <div className="main-content">
                <div className="header">
                    <h1>Welcome, Admin</h1>
                    <p>Manage applications, courses, and students efficiently.</p>
                </div>
                <div className="card-container">
                    <div className="card">
                        <h3>View All Applications</h3>
                        <p>Review and approve/reject student applications.</p>
                        <button onClick={() => navigate('/admin/applications')} >Go to Applications</button>
                    </div>
                    <div className="card">
                        <h3>Manage Courses</h3>
                        <p>Add, edit, or delete available courses.</p>
                        <button onClick={() => navigate('/admin/manage-courses')}>Manage Courses</button>
                    </div>
                    <div className="card">
                        <h3>View Students</h3>
                        <p>View registered student details.</p>
                        <button onClick={() => navigate('/admin/students')}>View Students</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}