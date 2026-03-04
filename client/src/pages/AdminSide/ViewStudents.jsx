import "../../styles/AdminSide/ViewStudents.css";
import { AdminNav } from "../../AdminNav";

export function ViewStudents(){
    return(
        <div class="view-students-body">    
        <AdminNav />
        <div class="dashboard-container">
            <div class="header">
                <h1>Registered Students</h1>
                <p>View all registered student details.</p>
            </div>
            <div class="table-container">
                <table class="student-table">
                    <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Department</th>
                        <th>Registered Date</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>STU001</td>
                        <td>Deepak S</td>
                        <td>deepak@gmail.com</td>
                        <td>9876543210</td>
                        <td>CSE</td>
                        <td>05-03-2026</td>
                        <td>
                        <button class="view-btn">View</button>
                        <button class="delete-btn">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>STU002</td>
                        <td>Rahul K</td>
                        <td>rahul@gmail.com</td>
                        <td>9876543222</td>
                        <td>MECH</td>
                        <td>07-03-2026</td>
                        <td>
                        <button class="view-btn">View</button>
                        <button class="delete-btn">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>STU003</td>
                        <td>Anitha R</td>
                        <td>anitha@gmail.com</td>
                        <td>9876543333</td>
                        <td>CSE</td>
                        <td>10-03-2026</td>
                        <td>
                        <button class="view-btn">View</button>
                        <button class="delete-btn">Delete</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

        </div>
        </div>
    );
}