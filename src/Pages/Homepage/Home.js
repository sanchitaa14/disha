import React, { useEffect } from "react";
import "./Home.css";
// import { EarthCanvas } from "../../canvas/EarthCanvas";

// Images
import red from "../Images/red.jpg";
import hawa from "../Images/hawa.jpg"
import taj from "../Images/taj.jpg"
import sky from "../Images/sky.png";
import bg from "../Images/bg.png";
import left from "../Images/left.png";
import right from "../Images/right.png";
import bottom from "../Images/bottom.png";
import line from "../Images/line.png";
import { Link } from "react-router-dom";
import Chatbot from "../../chatBot/Chat";
import Footer from "../../Footer/Footer";

function Home() {
    
    useEffect(() => { 
        let text = document.getElementById("front-page-text");
        let leaf1 = document.getElementById("front-page-left");
        let leaf2 = document.getElementById("front-page-right");
        // let hill1 = document.getElementById('front-page-middle');

        window.addEventListener("scroll", () => {
            let value = window.scrollY;
            if (text) {
                text.style.marginTop = value * 2.5 + "px";
            }
            if (leaf1) {
                leaf1.style.left = value * -1.5 + "px";
            }
            if (leaf2) {
                leaf2.style.right = value * -1.5 + "px";
            }
            if (value >= 200) {
                text.style.opacity = 1 - value * 0.002;
            }
            if (value < 200) {
                text.style.opacity = 1 + value * 0.002;
            }
            // if (hill1) {
            //     hill1.style.bottom = value * -1.5 + 'px';
            // }
        });
    }, []);
    

    return (
        <div id="Home" className="Home">
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
                <div id="front-page-text" className="front-page-text">
                    <p id="front-page-heading">
                        CONNECTING TOURISTS AND GUIDES ACROSS INDIA
                    </p>
                    <div
                        id="front-page-text-buttons"
                        className="front-page-text-buttons"
                    >
                        <button>
                            <Link to ="/guide" >Find your guide</Link>
                        </button>
                        <button>
                          <Link to = "/register">Become a guide</Link>
                        </button>
                    </div>
                </div>
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

            <div id="bottom-div" className="bottom-div">
                <img src={line} alt="" />
                <div className="bottom-div-left">
                    <span>AS A TOURIST</span>
                    <p>Find local guides near you</p>
                    <p>Hire certified guides on hourly basis</p>
                    <p>Interact with fellow tourists in the area</p>
                </div>
                <div className="bottom-div-right">
                    <span>AS A GUIDE</span>
                    <p>Be a guide and promote your local culture</p>
                    <p>Education Sources</p>
                    <p>Increases local employment rate</p>
                </div>
            </div>
            <div class="cover">
        <div class="box">
            <img src={taj} />
            {/* <h2>Taj Mahal</h2> */}
            


        </div>
        <div class="box">
            <img src={red} />
            {/* <h2>red fort</h2> */}
            {/* <h2>Red Fort</h2> */}
            
        </div>
        <div class="box">
            <img src={hawa} />
            {/* <h2>Hawa Mahal</h2> */}

        </div>
    </div>
   
    <div className="ar">
    <button class="glow-on-hover" type="button">
      HOVER ME, AND ENTER INTO A NEW WORLD!
    </button>
    </div>
    
    {/* <EarthCanvas /> */}
            <Chatbot/>
            <Footer/>
        </div>

    );
}

export default Home;
