import cs from "../../assets/cs.jpg";
import searchIcon from "../../assets/icons8-search-50.png";
import "../../styles/UserSide/CoursePage.css";
import { useNavigate } from "react-router-dom";

export function CoursePage(){
    const navigate = useNavigate();

    return(
        <div className="course-body">
            <div className="header">
                <span>Available Courses</span>
                <p>Browse and apply to your favorite courses.</p>
            </div>
            <div className="search-bar">
                <img src={searchIcon}></img>
                <input type="text" placeholder="Search courses..." />
                <button>Search</button>
            </div>
            <div className="course-list">
                <div className="course-card">
                    <div className="course-img">
                        <img src={cs}/>
                    </div>
                    <div className="course-info">
                        <h3>Computer Science and Engineering</h3>
                        <p>Duration: 4 years</p>
                        <p>Eligibility: 10+2 with Physics, Chemistry, and Mathematics</p>
                        <p>Seats Available: 30</p>
                        <p>Explore the world of computing, programming, and software development.</p>
                        <button onClick={() => navigate("/application")}>Apply Now</button>
                    </div>
                </div>
                <div className="course-card">
                    <div className="course-img">
                        <img src={cs}/>
                    </div>
                    <div className="course-info">
                        <h3>Computer Science and Engineering</h3>
                        <p>Duration: 4 years</p>
                        <p>Eligibility: 10+2 with Physics, Chemistry, and Mathematics</p>
                        <p>Seats Available: 30</p>
                        <p>Explore the world of computing, programming, and software development.</p>
                        <button>Apply Now</button>
                    </div>
                </div>
                <div className="course-card">
                    <div className="course-img">
                        <img src={cs}/>
                    </div>
                    <div className="course-info">
                        <h3>Computer Science and Engineering</h3>
                        <p>Duration: 4 years</p>
                        <p>Eligibility: 10+2 with Physics, Chemistry, and Mathematics</p>
                        <p>Seats Available: 30</p>
                        <p>Explore the world of computing, programming, and software development.</p>
                        <button>Apply Now</button>
                    </div>
                </div>
                <div className="course-card">
                    <div className="course-img">
                        <img src={cs}/>
                    </div>
                    <div className="course-info">
                        <h3>Computer Science and Engineering</h3>
                        <p>Duration: 4 years</p>
                        <p>Eligibility: 10+2 with Physics, Chemistry, and Mathematics</p>
                        <p>Seats Available: 30</p>
                        <p>Explore the world of computing, programming, and software development.</p>
                        <button>Apply Now</button>
                    </div>
                </div>
                <div className="course-card">
                    <div className="course-img">
                        <img src={cs}/>
                    </div>
                    <div className="course-info">
                        <h3>Computer Science and Engineering</h3>
                        <p>Duration: 4 years</p>
                        <p>Eligibility: 10+2 with Physics, Chemistry, and Mathematics</p>
                        <p>Seats Available: 30</p>
                        <p>Explore the world of computing, programming, and software development.</p>
                        <button>Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}