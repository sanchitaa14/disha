import React from "react";
import "./Support.css";

import sky from "../Images/sky.png";
import bg from "../Images/bg.png";
import left from "../Images/left.png";
import right from "../Images/right.png";
import bottom from "../Images/bottom.png";

function Support() {
    return (
        <div className="support">
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
            <h1>Support</h1>
            <div className="support-content">
                <p><b>How Can We Assist You Today?</b><br /><br /><br />
                    <b>Frequently Asked Questions (FAQs)</b> <br />
                    Explore common questions and find quick answers in our FAQ section.<br />

                    1.How do I find a guide for a specific location?
                    2.What information should I discuss with my chosen guide before the trip?
                    3.How do I book a guide for my upcoming journey?
                    4.What happens if I need to cancel or reschedule my booking?<br /><br /><br />
                    <b>Contact Us</b><br />
                    We're here to help! Reach out to our support team through the following channels:

                    Email: support@disha.com
                    Phone: 9319xxxxxx
                    Live Chat: to be added soon<br /><br /><br />
                    <b>Future Things To be added</b>
                    <br />
                    1. Virtual guide
                    2. Live Guide Location tracking</p>
            </div>
        </div>
    );
}

export default Support;
