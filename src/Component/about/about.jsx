import React from "react";  
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { IoFolderSharp } from "react-icons/io5";
const About = () => {
  return (
   <section className="about" id="about">
    <div className="top_sec">
      <h1>Get to Know
      </h1>
      <h2>About Me</h2>
    </div>
    <div className="container about_contaner">
      <div className="about_content">
        <div className="about_cards">
          <div className="about_card">
            <FaAward  className="about_icon"/>

            <h5>Award Winning</h5>
            <small>I have won multiple awards for our work.</small>
          </div>
           <div className="about_card">
            <FaUsers   className="about_icon"/>
            <h5>My Players</h5>
            <small> <a href="#skils" style={{color:"white"}}>I made up of skilled professionals.</a></small>
          </div>
           <div className="about_card">
            <IoFolderSharp className="about_icon"/>
            <h5>Projects</h5>
            <small> <a href="#projects" style={{color:"white"}}>copleted</a></small>
           
            
            
          </div>
        </div>
        <div className="about_content">
        <p>
  I am dedicated to delivering high-quality work and continuously improving my programming skills. 
  <br />
  I strive to create innovative and efficient solutions in web and app development. 
  <br />
  I believe in learning constantly and building strong projects based on quality, creativity, and reliability.
</p>
        <a href="#contact" className="btn btn-primary">contact</a></div>
  
      </div>
    </div>
   </section>
  );
};

export default About;
