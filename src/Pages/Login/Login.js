import React, {useState} from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

//images
import sky from "../Images/sky.png";
import bg from "../Images/bg.png";
import left from "../Images/left.png";
import right from "../Images/right.png";
import bottom from "../Images/bottom.png";

function Login() {
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
      });
      let navigate = useNavigate()
    
      const handleSubmit = async (e) => {//a synthetic event
        e.preventDefault();
    
        try {
          const response = await fetch("http://localhost:5000/api/loginuser", { //we create a separate route for this in the UserCreate js just know it
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
              
            })//note the names must be same as backend
          });
    
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
    
          const json = await response.json();
          console.log(json);
    
          if (!json.success) {
            alert("Enter Valid Credentials");
          }
          if(json.success){
            localStorage.setItem("authToken", json.authToken); //storing in local storage
             navigate("/guide");
          }// using navigate to to redirect ourselves after logging in to another page you want
        } catch (error) {
          console.error("Error during fetch:", error);
          // Handle the error as needed, e.g., show an error message to the user
          alert("An error occurred. Please try again.");
        }//except header rest change in auth token, every time at login, and all are correct and can be verified
      };
    
      const onChange = (event) => {
        setCredentials({
          ...credentials,
          [event.target.name]: event.target.value
        });
      };
    return (
        <div className="signup">
            <div id="front-page" className="front-page">
                <img
                    id="front-page-sky"
                    className="front-page-sky"
                    src={sky}
                    alt=""
                />
                <img
                    id="front-page-middle"
                    className="front-page-middle"
                    src={bg}
                    alt=""
                />
                <img
                    id="front-page-left"
                    className="front-page-left"
                    src={left}
                    alt=""
                />
                <img
                    id="front-page-right"
                    className="front-page-right"
                    src={right}
                    alt=""
                />
                <img
                    id="front-page-bottom"
                    className="front-page-bottom"
                    src={bottom}
                    alt=""
                />
            </div>

            <form onSubmit = {handleSubmit} className="login-form" id="login-form">
                <h1>Login</h1>
                <input type="email" 
                placeholder="Email"
                 id="email-field" 
                 name="email"
                 value={credentials.email}
                 onChange={onChange} />
                <input
                    type="password"
                    placeholder="Password"
                    id="password-field"
                    name="password"
                    onChange={onChange}
                    value={credentials.password}
                />
                <button type="submit">Continue</button>
                <p>
                    Don't have an account?{" "}
                    <Link to="/signup">
                        <span>SignUp</span>
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default Login;
