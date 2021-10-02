import React from "react";
import "./testimonials.scss";

export const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        <div className="card">
          <div className="top">
            <img src="assets/images/right-arrow.png" className="left" alt="" />
            <img
              src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <img src="assets/images/youtube.png" alt="" />
          </div>
          <div className="center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus, aperiam nemo.
          </div>
          <div claLssName="bottom">
            <h3>MSAL</h3>
            <h4>CEO Softech.</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
