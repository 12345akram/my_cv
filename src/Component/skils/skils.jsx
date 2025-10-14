import React from "react";
import "./skil.css";
import css from "../../assets/dev2.jpg"
import javascript from "../../assets/dev2.jpg"
import pathon from "../../assets/dev2.jpg"
import react from "../../assets/dev2.jpg"
import java from "../../assets/dev2.jpg"
import csss from "../../assets/dev2.jpg"
import twind from "../../assets/dev2.jpg"
 
const SkillsData = [
  {
    id: 1,
    image: css,
    title:'css',
    disc: 'user interfaces'
  },
   {
    id: 2,
    image: javascript,
    title:'css',
    disc: 'user interfaces'
  }, {
    id: 3,
    image: pathon,
    title:'css',
    disc: 'user interfaces'
  }, {
    id: 4,
    image: css,
    title:'css',
    disc: 'user interfaces'
  }, {
    id: 5,
    image: twind,
    title:'css',
    disc: 'user interfaces'
  }, {
    id: 6,
    image: css,
    title:'css',
    disc: 'user interfaces'
  }, {
    id: 7,
    image: css,
    title:'css',
    disc: 'user interfaces'
  }, {
    id: 8,
    image: css,
    title:'css',
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