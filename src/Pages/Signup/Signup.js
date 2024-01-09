import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

//images
import sky from "../Images/sky.png";
import bg from "../Images/bg.png";
import left from "../Images/left.png";
import right from "../Images/right.png";
import bottom from "../Images/bottom.png";

function Signup() {
    const [credentials, setCredentials] = useState({
        name: "",
        email: "",
        password: "",
        geolocation: "",
        number: ""
      });
    
      const handleSubmit = async (e) => {//a synthetic event
        e.preventDefault();
    
        try {
          const response = await fetch("http://localhost:5000/api/createuser", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: credentials.name,
              email: credentials.email,
              number: credentials.number,
              password: credentials.password,
              location: credentials.geolocation
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
        } catch (error) {
          console.error("Error during fetch:", error);
          // Handle the error as needed, e.g., show an error message to the user
          alert("Your data has been stored");
        }
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

            <form onSubmit={handleSubmit} className="signup-form" id="signup-form"> 
                <h1>Signup</h1>
                <input
                    type="text"
                    placeholder="Full Name"
                    id="fullname-field"
                    name="name"
                    value={credentials.name}
                    onChange = {onChange}
                />
                
                <input
                    type="number"
                    placeholder="number"
                    id="fullname-field"
                    name="number"
                    value={credentials.number}
                    onChange = {onChange}
                />

                <input 
                type="email" 
                placeholder="Email" 
                id="email-field"
                name="email"
                value={credentials.email}
                onChange = {onChange}
                 />

                <input
                    type="location"
                    placeholder="Location"
                    id="mobile-field"
                    name="geolocation"
                    onChange = {onChange}
                    value={credentials.geolocation}
                />

                <input
                    type="password"
                    placeholder="Password"
                    id="password-field"
                    name="password"
                    value={credentials.password}
                    onChange = {onChange}
                />
                <button type="submit">Continue</button>
                <p>
                    Already have an account?{" "}
                    <Link to="/login">
                        <span>LogIn</span>
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default Signup;