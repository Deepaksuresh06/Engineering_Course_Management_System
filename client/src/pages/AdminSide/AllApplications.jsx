import { AdminNav } from "../../AdminNav";
import "../../styles/AdminSide/AllApplications.css";

export function AllApplications(){
    return(
        <div class="all-applications-body">
        <AdminNav />
        <div class="dashboard-container">
            <div class="header">
                <h1>All Applications</h1>
                <p>Review and manage student course applications.</p>
            </div>
            <div class="table-container">
            <table class="application-table">
                <thead>
                    <tr>
                        <th>Application ID</th>
                        <th>Student Name</th>
                        <th>Course</th>
                        <th>Department</th>
                        <th>Applied Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>APP001</td>
                        <td>Deepak S</td>
                        <td>B.E Computer Science</td>
                        <td>CSE</td>
                        <td>10-03-2026</td>
                        <td><span class="status approved">Approved</span></td>
                        <td>
                            <button class="approve-btn">Approve</button>
                            <button class="reject-btn">Reject</button>
                        </td>
                    </tr>
                    <tr>
                        <td>APP002</td>
                        <td>Rahul K</td>
                        <td>B.E Mechanical</td>
                        <td>MECH</td>
                        <td>12-03-2026</td>
                        <td><span class="status pending">Pending</span></td>
                        <td>
                            <button class="approve-btn">Approve</button>
                            <button class="reject-btn">Reject</button>
                        </td>
                    </tr>
                    <tr>
                        <td>APP003</td>
                        <td>Anitha R</td>
                        <td>M.Tech AI</td>
                        <td>CSE</td>
                        <td>15-03-2026</td>
                        <td><span class="status rejected">Rejected</span></td>
                        <td>
                            <button class="approve-btn">Approve</button>
                            <button class="reject-btn">Reject</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
        </div>
    );
}