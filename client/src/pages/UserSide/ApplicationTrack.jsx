import "../../styles/UserSide/ApplicationTrack.css";
import { Navigation } from "../../Navigation";

export function ApplicationTrack(){
    return(
        <div>
        <Navigation />
        <div className="track-page">
            <div className="track-header">
                <h2>My Applications</h2>
                <p>Track the status of your course applications.</p>
                <span className="count">Total Applications: 3</span>
            </div>
            <table className="application-table">
                <thead>
                    <tr>
                        <th>Application ID</th>
                        <th>Course</th>
                        <th>Department</th>
                        <th>Applied Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>APP001</td>
                        <td>B.E Computer Science</td>
                        <td>CSE</td>
                        <td>10-03-2026</td>
                        <td><span className="status approved">Approved</span></td>
                    </tr>
                    <tr>
                        <td>APP002</td>
                        <td>B.E Mechanical Engineering</td>
                        <td>MECH</td>
                        <td>12-03-2026</td>
                        <td><span className="status pending">Pending</span></td>
                    </tr>
                    <tr>
                        <td>APP003</td>
                        <td>M.Tech Artificial Intelligence</td>
                        <td>CSE</td>
                        <td>15-03-2026</td>
                        <td><span className="status rejected">Rejected</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    );
}