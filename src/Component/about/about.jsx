import React from "react";  
import "./about.css";
import imge from '../../assets/my.jpg'
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { IoFolderSharp } from "react-icons/io5";
import dev2 from '../../assets/dev2.jpg'
import dev1 from '../../assets/dev1.jpg'
import dev3 from '../../assets/dev3.jpg'
const About = () => {
  return (
   <section className="about" id="about">
    <div className="top_sec">
      <h1>Get to Know
      </h1>
      <h2>About us</h2>
    </div>
    <div className="container about_contaner">
      <div className="team_members">
  <img src={dev2} alt="Member 1" />
  <img src={dev1} alt="Member 2" />
  <img src={dev3} alt="Member 3" />
  <img src={dev3} alt="Member 4" />
  <img src={dev3} alt="Member 5" />
  <img src={dev3} alt="Member 6" />
</div>

      <div className="about_content">
        <div className="about_cards">
          <div className="about_card">
            <FaAward  className="about_icon"/>

            <h5>Award Winning</h5>
            <small>We have won multiple awards for our work.</small>
          </div>
           <div className="about_card">
            <FaUsers   className="about_icon"/>
            <h5>Team Players</h5>
            <small>Our team is made up of skilled professionals.</small>
          </div>
           <div className="about_card">
            <IoFolderSharp className="about_icon"/>
            <h5>Projects</h5>
            <small>copleted</small>
          </div>
        </div>
        <div className="about_content">
                <p>We are dedicated to delivering high-quality work and exceeding our clients' expectations.
          <br />Our team is committed to continuous improvement and innovation.
          <br />We believe in building strong relationships with our clients based on trust and transparency.
        </p>
        <a href="#contact" className="btn btn-primary">contact</a></div>
  
      </div>
    </div>
   </section>
  );
};

export default About;
