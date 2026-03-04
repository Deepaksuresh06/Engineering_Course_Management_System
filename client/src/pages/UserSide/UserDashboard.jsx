import formIcon from "../../assets/icons8-form-40.png";
import calander from "../../assets/icons8-calendar-32.png";
import user from "../../assets/icons8-user-30.png";
import mail from "../../assets/icons8-mail-24.png";
import authIcon from "../../assets/icons8-authentication-50.png";
import graduate from "../../assets/icons8-graduate-40.png";
import "../../styles/UserSide/UserDashboard.css";
import { useNavigate } from "react-router-dom";
import { Navigation } from "../../Navigation";

export function UserDashboard(){
    const navigate = useNavigate();

    return(
        <div>
        <Navigation />
        <div className="body">
            <div className="welcome">
                <span className="welcome-span"> Welcome "USER"</span>
                <p>You are logged in as Student</p>
            </div>
            <div className="main">
                <div className="info">
                    <span className="info-span">Student Info</span>
                    <table className="info-table">
                        <tbody>
                            <tr>
                                <td><img src={user}/></td>
                                <td>Name</td>
                                <td>Deepak</td>
                            </tr>
                            <tr>
                                <td><img src={mail}/></td>
                                <td>Email</td>
                                <td>deepak@gmail.com</td>
                            </tr>
                            <tr>
                                <td><img src={authIcon}/></td>
                                <td>Role</td>
                                <td>Student</td>
                            </tr>
                            <tr>
                                <td><img src={calander} /></td>
                                <td>Account Created at</td>
                                <td>19-12-2026</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="actions-container">
                    <span className="info-span">Quick Actions</span>
                    <div className="containers">
                        <div className="container">
                            <img src={graduate}/>
                            <p className="description">Browse and Apply your dream courses</p>
                            <button className="btn" onClick={() => navigate("/courses")}>View Courses</button>
                        </div>
                        <div className="container">
                            <img src={formIcon}/>
                            <p className="description">Check the status of your applications.</p>
                            <button className="btn" onClick={() => navigate("/track")}>View Application</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}