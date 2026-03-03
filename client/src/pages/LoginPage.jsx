import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";

export function LoginPage(){
    const navigate = useNavigate();
    function handleSubmit(){
        navigate("/dashboard");
    }
    return(
        <div className="body"> 
            <div className="login-container">
                <center className="heading">LOGIN</center>
                <div className="inner-container">
                    User-mail
                    <input className="user-mail" placeholder="Enter Your Mail-id" type="mail"/>     
                    <br></br>
                    Password
                    <input className="user-pass" placeholder="Enter Password" type="password"/>
                    <p>Already not having account.? <a className="reg-redirect" onClick={() => navigate("/register")}>Register</a></p>
                    <button className="login-btn" onClick={handleSubmit}>LogIn</button>
                </div>
            </div>
        </div>
    );
}
