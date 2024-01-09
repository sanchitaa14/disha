import React from "react";
import "./Navbar.css";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
    const handleLogout = () =>{
        localStorage.removeItem("authToken"); //basic stuff, remove the authtoken
        navigate("/login")
    }
    const navigate = useNavigate();
    const navigateSignup = () => {
        navigate("/signup");
    };
    const navigateHome = () => {
        navigate("/");
    };

    let hide = document.getElementById("navbar-right-button");
    const location = useLocation();
    if (location.pathname === "/login" || location.pathname === "/signup") {
        if (hide) {
            hide.style.display = "none";
        }
    } else {
        if (hide) {
            hide.style.display = "flex";
        }
    }
    return (
        <div id="navbar" className="navbar">
            <div
                id="navbar-left"
                className="navbar-left"
                onClick={navigateHome}
            >
                {/* remove div add image */}
                {/* <div id="temp" className="temporary"></div> */}
                <p>Disha.</p>
            </div>

            <div id="navbar-center" className="navbar-center">
                <p>
                    <Link to="/about">About</Link>
                </p>
                <p>
                    <Link to="/support">Support</Link>
                </p>
                <p>
                    <Link to="/blog">Blog</Link>
                </p>
            </div>
             {(localStorage.getItem("authToken"))?<p>
                    <Link to="/guide">My Guide</Link>
                </p> : ""
             }
              {(!localStorage.getItem("authToken"))?
           
           <div id="navbar-right" className="navbar-right">
           <button id="navbar-right-button" onClick={navigateSignup}>
               Join 
           </button>
       </div>
            :
           
        <div id="navbar-right" className="navbar-right nav-logout">
        <button id="navbar-right-button">My Guide
        </button>
        <button id="navbar-right-button" onClick={handleLogout}>Logout
        </button>
        </div>
            }
        </div>
    );
}

export default Navbar;
