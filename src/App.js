import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar/Navbar";
import Home from "./Pages/Homepage/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Blog from "./Blog/Blog";
import Support from "./Pages/Support/Support";
import About from "./Pages/About/About";
import Guide from "./Pages/Guide/Guide";
import Footer from "./Footer/Footer";
import "./App.css";
import Feedback from "./Pages/Feedback/Feedback"
//background images
import sky from "../src/Pages/Images/sky.png";
import bg from "../src/Pages/Images/bg.png";
import left from "../src/Pages/Images/left.png";
import right from "../src/Pages/Images/right.png";
import bottom from "../src/Pages/Images/bottom.png";
import AddGuide from "./AddGuide/AddGuide";
import Map from "./Map/Map"
import { CartProvider } from "./ContextReducer";
import Cart from "./Pages/Cart/Cart";
import Profile from "./Pages/Profile/Profile"
function App() {// so that whole application knows where the dispatch or state is being called
    
    return (
        <div>
            <CartProvider>
            <Router>
                <Navbar />
                {/* <div id="background-page" className="background-page">
                    <img
                        id="background-page-sky"
                        className="background-page-sky"
                        src={sky}
                        alt=""
                    />
                    <img
                        id="background-page-middle"
                        className="background-page-middle"
                        src={bg}
                        alt=""
                    />
                    <img
                        id="background-page-left"
                        className="background-page-left"
                        src={left}
                        alt=""
                    />
                    <img
                        id="background-page-right"
                        className="background-page-right"
                        src={right}
                        alt=""
                    />
                    <img
                        id="background-page-bottom"
                        className="background-page-bottom"
                        src={bottom}
                        alt=""
                    />
                </div> */}
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/signup" element={<Signup />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/blog" element={<Blog />}></Route>
                    <Route path="/support" element={<Support />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/guide" element={<Guide />}></Route>
                    <Route path="/register" element={<AddGuide />}></Route>
                    <Route path="/feedback" element={<Feedback />}></Route>
                    <Route path="/map" element={<Map />}></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                    <Route path="/profile" element={<Profile />}></Route>
                </Routes>
                
            </Router>
            </CartProvider>
        </div>
    );//difference in encryption and hashing, in encyption hackers might decrypt it easily, so hashing  comes into picture it is a one way procedure it has three sections brypt version, exponent, generated salt and its hard to decode, and we store hash into mongodb
}//salt adds random bits to make it secure even more

export default App;
