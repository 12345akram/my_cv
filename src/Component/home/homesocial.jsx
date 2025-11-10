import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";




const HomeSocial = () => {
  return (
     <div className="home_social">
      <a href="https://www.linkedin.com/in/akram-" target="_blank" rel="noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/12345akram" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://dribbble.com/akramameen" target="_blank" rel="noreferrer">
        <FaDribbble />
      </a>
      <a href="https://www.facebook.com/akramameen" target="_blank" rel="noreferrer">
        <FaFacebookSquare />
      </a>
      <a href="https://twitter.com/akramameen" target="_blank" rel="noreferrer">
        <FaSquareXTwitter />
      </a>
    </div>
  );
};

export default HomeSocial;
