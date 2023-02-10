import React from "react";
import "./Hero.css";
import Img1 from "./images/img3.png";
import spoon from "./images/spoon.svg";
import Testimonial from "./Testimonial";

const Hero = () => {
  return (
    <div className="container">
      <img src={Img1} />
      <div className="spoon">
        <img src={spoon} />
      </div>
      <Testimonial />
      <div className="textcontainer">
        <h1>Let's Start Cooking With Popular Recipe</h1>
        <div className="pcontain">
          <p>
            Want to learn cook but confused how to start? No need to worry
            again!
          </p>
        </div>
      </div>

      <div className="containerButton">
        <button className="btn">Get Started</button>
        <button className="btn2">Explore Menu</button>
      </div>
    </div>
  );
};

export default Hero;
