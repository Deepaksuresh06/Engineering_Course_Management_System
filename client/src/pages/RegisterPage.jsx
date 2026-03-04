import { useNavigate } from "react-router-dom";
import "../styles/RegisterPage.css";
import { Navigation } from "../Navigation";

export function RegisterPage(){
    const navigate = useNavigate();     
    function handleSubmit(){
        navigate("/");
    }
    return(
        <div>
            <Navigation />
            <div className="body"> 
                <div className="reg-container">
                    <center className="heading">REGISTER</center>
                    <div className="inner-container">
                        Username
                        <input className="user-name" placeholder="Enter Your Name" type="text"/>
                        <br/>
                        User-mail
                        <input className="user-mail" placeholder="Enter Your Mail-id" type="mail"/>     
                        <br/>
                        Password
                        <input className="user-pass" placeholder="Enter Password" type="password"/>
                        <p>Already having account here..? <a className="log-redirect" onClick={() => navigate("/")}>Login</a></p>
                        <button className="reg-btn" onClick={handleSubmit}>Register</button>
                    </div>
                </div>
            </div>
        </div>
    );
}