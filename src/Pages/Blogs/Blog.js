import React from "react";
import "./Blog.css";

import sky from "../Images/sky.png";
import bg from "../Images/bg.png";
import left from "../Images/left.png";
import right from "../Images/right.png";
import bottom from "../Images/bottom.png";

function Blog() {
    return (
        <div className="blog">
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
            <h1>Blog</h1>
        </div>
    );
}

export default Blog;
