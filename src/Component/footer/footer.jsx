import React from "react";
import "./footer.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <a href="a" className="footer_logo"> readTech</a>
      <ul className="pormalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About </a></li>
        <li><a href="#skils">skils </a></li>
        <li><a href="#services">services </a></li>
        <li><a href="#projects">projects </a></li>
        <li><a href="#contact">Contact </a></li>

      </ul>
      <div className="footer_social">
        <a href="#" target="_blank" ><FaFacebookSquare /></a>
        <a href="#" target="_blank" ><FaXTwitter /></a>
        <a href="#" target="_blank" ><FaInstagramSquare /></a>
      </div>
      <div className="footer_copy_right">
        <small>&copy;<a href="#"> readTech</a> All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
