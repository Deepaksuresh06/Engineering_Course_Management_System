import "../../styles/UserSide/ApplicationPage.css";

export function ApplicationPage(){
    return(
        <div>
        <Navigation />
        <div className="application-body">
            <h2>Application Form</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                alert("Application Successfully Submitted ✅");
            }}>
                <label htmlFor="name">Name:</label>
                <br></br>
                <input type="text" id="name" name="name" placeholder="Enter Your Name" required />
                <br></br>
                <label htmlFor="email">Email:</label>
                <br></br>
                <input type="email" id="email" name="email" placeholder="Enter valid Email" required />
                <br></br>
                <label htmlFor="number">Phone Number:</label>
                <br></br>
                <input type="tel" id="number" name="number" placeholder="Enter valid Phone Number" required />
                <br></br>
                <label htmlFor="cutoff">CutOff Mark:</label>
                <br></br>
                <input type="tel" id="cutoff" name="cutoff" placeholder="Enter Your CutOff Mark" required />
                <br></br>
                <label htmlFor="admission-type">Admission Type:</label>
                <br></br>
                <select id="admission-type" name="admission-type" required>
                    <option value="">Select an option</option>
                    <option value="Government">Government</option>
                    <option value="Lateral Entry">Lateral Entry</option>
                    <option value="Management">Management</option>
                    <option value="Sports">Sports</option>
                </select>
                <br></br>
                <label htmlFor="course">Preferred Course:</label>
                <select id="course" name="course" required>
                    <option value="">Select a course</option>
                    <option value="cs">Computer Science and Engineering</option>
                    <option value="me">Mechanical Engineering</option>
                    <option value="ee">Electrical Engineering</option>
                </select>

                <button type="submit">Submit Application</button>
            </form>
        </div>
        </div>
    );
}