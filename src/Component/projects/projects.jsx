import React from "react";
import "./project.css";
import imgo from '../../assets/dev2.jpg'
import p2 from '../../assets/dev2.jpg'
import p3 from '../../assets/dev2.jpg'
import p4 from '../../assets/dev2.jpg'
import p5 from '../../assets/dev2.jpg'
import p6 from '../../assets/dev2.jpg'
const potifolioData = [
  {
    id: 1,
    img: imgo,
    title:'csss',
    github: 'https://github.com/project1',
    demo: 'https://demo2.com'
  },
   {
    id: 2,
    img: p2,
    title:'poetfoilo items',
    github: 'https://github.com/project1',
    demo: 'https://demo2.com'
  }, {
    id: 3,
    img: p3,
    title:'css',
    github: 'https://github.com/project1',
    demo: 'https://demo2.com'
  }, {
    id: 4,
    img: p4,
    title:'css',
    github: 'https://github.com/project1',
    demo: 'https://demo2.com'
  }, {
     id: 5,
    img: p5,
    title:'css',
    github: 'https://github.com/project1',
    demo: 'https://demo2.com'
  }, {
   id: 6,
    img: p6,
    title:'css',
    github: 'https://github.com/project1',
    demo: 'https://demo2.com'
  }
  
]
const Projects = () => {
  return (
  <section className="projectss" id="projects">
     <div className="top_sec">
      <h1>ًWhat projects we do
      </h1>
      <h2> our experince</h2>
    </div>
    <div className="container contaner_projects">
      {potifolioData.map(({id,img,title,github,demo}) =>(
        <article  className="porfilo_item">
        <div className="prfotilo_item_image">
          <img src={img} alt="" />
        </div>
        <h3>{title}</h3>
        <div className="portfolio_item_btn">
          <a href={github} target="_blank" className="btn">get hub</a>
           <a href={demo}  target="_blank" className="btn btn-primary">live dome</a>
        </div>
      </article>

      ))}
      
    </div>
  </section>
  );
};

export default Projects;
