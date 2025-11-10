import React from "react";
import "./skil.css";
import flutter from "../../assets/flutter.jpeg"
import java from "../../assets/java.jpeg"
import react from "../../assets/react.jpeg"
import php from "../../assets/php.jpeg"
import html from "../../assets/html.jpeg"
import css from "../../assets/css.jpeg"
import slaceforce from "../../assets/salceforce.jpeg"
import ajax from "../../assets/ajax.png"
import database from "../../assets/database.jpeg"
import paython from "../../assets/paython.jpeg"
import office from "../../assets/office.jpeg"
import ccna from "../../assets/ccna.jpeg"
 
const SkillsData = [
  {
    id: 1,
    image: java,
    title:'java_web_servlet_jsp',
    disc: 'user interfaces'
  },
   {
    id: 2,
    image: flutter,
    title:'fluter',
    disc: 'user interfaces'
  }, {
    id: 3,
    image: react,
    title:'react',
    disc: 'user interfaces'
  }, {
    id: 4,
    image: php,
    title:'php',
    disc: 'user interfaces'
  }, {
    id: 5,
    image: html,
    title:'html',
    disc: 'user interfaces'
  }, {
    id: 6,
    image: css,
    title:'css',
    disc: 'user interfaces'
  }, {
    id: 7,
    image: slaceforce,
    title:'salceforce',
    disc: 'user interfaces'
  }, {
    id: 8,
    image: ajax,
    title:'ajax',
    disc: 'user interfaces'
  },
   {
    id: 9,
    image: database,
    title:'database',
    disc: 'user interfaces'
  },{
    id: 9,
    image: office,
    title:'office',
    disc: 'user interfaces'
  },{
    id: 9,
    image: paython,
    title:'paython',
    disc: 'user interfaces'
  },{
    id: 9,
    image: ccna,
    title:'ccna',
    disc: 'user interfaces'
  }
  
]
const Skil = () => {
  return (
      <section className="skills" id="skils">
        <div className="top_sec">
      <h1>ًWhat skills we have
      </h1>
      <h2> our experince</h2>
    </div>
    <div className="container contaner_skills">
      {SkillsData.map(({id, image,title,disc}) =>(
        <article className="card_skils">
        <div className="icon">
          <img className="img" src={image} alt=""  />
        </div>
        <div className="content">
          <h4>{title}</h4>
          <p className="text-light">{disc}</p>
        </div>
      </article>

      ))}
      
    </div>
      </section>
  );
};
export default Skil;