import React from "react";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <div>
      <div>
        <div className="card">
          <div className="img"></div>
          <div className="textBox">
            <div className="textContent">
              <p className="h1">Elizabeth Olsen</p>
              <span className="span">12 min ago</span>
            </div>
            <p className="p">It’s the Simple Elevation Your Dinner Needs 😍</p>
            <div></div>
          </div>
        </div>
        <div className="card1">
          <div className="img11"></div>
          <div className="textBox1">
            <div className="textContent1">
              <p className="h11">Glenn Zaballero</p>
              <span className="span1">12 min ago</span>
            </div>
            <p className="p1">This app is so cool 🔥🔥🔥 </p>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
