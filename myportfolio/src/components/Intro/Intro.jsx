import React, { useEffect, useRef } from "react";
import { init } from "ityped";

import "./intro.scss";

export const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      typeSpeed: 110,
      backDelay: 1500,
      strings: [
        "Frontend Developer",
        "Backend Developer",
        "ReactJs Developer",
        "React-Native Developer",
      ],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/images/man.png" alt="something" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Muhammad Shahid</h1>
          <h3>
            Software Engineer <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/images/down.png" alt="" />
        </a>
      </div>
    </div>
  );
};
