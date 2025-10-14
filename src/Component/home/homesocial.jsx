import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";




const HomeSocial = () => {
  return (
    <div className="home_social">
     <a href="" target="_blank" rel="noreferrer"><FaLinkedin /></a>
      <a href="https://twitter.com/akram_anam" target="_blank" rel="noreferrer"><FaGithub/> </a>
           <a href="https://twitter.com/akram_anam" target="_blank" rel="noreferrer"><FaDribbble/></a>
     <a href="a" target="_blank" rel="noreferrer"><FaFacebookSquare /></a>
     <a href="https://twitter.com/akram_anam" target="_blank" rel="noreferrer"><FaSquareXTwitter/></a>
    </div>
  );
};

export default HomeSocial;
