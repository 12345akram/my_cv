import React from "react";
import "./home.css";
import My from '../../assets/Me.jpg'
import cv from '../../cv.pdf'
import HomeSocial from "./homesocial";
const Home = () => {
  return (
     <dev className='home'>
      <div className="container home_container">
        <h4>hello i'am</h4>
        <h1>Akram Anam</h1>
        <h4 className="text_light">NextGen Devloper</h4>
        <div className="btns">
          <a href={cv} className="btn" download>Downlod CV</a>
          <a href="a" className="btn-primary">lET'S look</a>
        </div>
<div className="ME">
  <div className="watermark"></div>
  <img src={My} alt="Akram" />
</div>

<a href="#about" className="scroll-down">scrool down</a>
<HomeSocial/>
      </div>
     </dev>
  );
};

export default Home;
