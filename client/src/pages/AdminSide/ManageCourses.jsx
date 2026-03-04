import "../../styles/AdminSide/ManageCourses.css";
import { AdminNav } from "../../AdminNav";

export function ManageCourses(){
    return(
        <div class="manage-courses-body">
        <AdminNav />
        <div class="dashboard-container">
            <div class="header">
                <h1>Manage Courses</h1>
                <p>Add, edit, or delete available courses.</p>
            </div>
            <div class="top-actions">
                <button class="add-btn">Add New Course +</button>
            </div>
            <div class="table-container">
                <table class="course-table">
                    <thead>
                    <tr>
                        <th>Course ID</th>
                        <th>Course Name</th>
                        <th>Department</th>
                        <th>Seats</th>
                        <th>Fees</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>CSE101</td>
                        <td>B.E Computer Science</td>
                        <td>CSE</td>
                        <td>60</td>
                        <td>₹1,20,000</td>
                        <td>
                        <button class="edit-btn">Edit</button>
                        <button class="delete-btn">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>MECH201</td>
                        <td>B.E Mechanical Engineering</td>
                        <td>MECH</td>
                        <td>50</td>
                        <td>₹1,00,000</td>
                        <td>
                        <button class="edit-btn">Edit</button>
                        <button class="delete-btn">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>AI301</td>
                        <td>M.Tech Artificial Intelligence</td>
                        <td>CSE</td>
                        <td>30</td>
                        <td>₹1,50,000</td>
                        <td>
                        <button class="edit-btn">Edit</button>
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