import React from "react";
import "./project.css";
import compus from '../../assets/compus.png'
import live_tv from '../../assets/live_tv.png'
import mobile from '../../assets/project.jpeg'
import php_project from '../../assets/php_project.jpeg'
import dashboard from '../../assets/dashboard.png'
import java_web from '../../assets/java_project.jpeg'
const potifolioData = [
  {
    id: 1,
    img: compus,
    title:'compus_connect_project',
    github: 'https://12345akram.github.io/copous_connect/',
    demo: 'https://demo2.com'
  },
   {
    id: 2,
    img: live_tv,
    title:'akram_tv_live_project',
    github: 'https://12345akram.github/',
    demo: 'https://demo2.com'
  }, {
    id: 3,
    img: mobile,
    title:'mobile_app_project',
    github: 'https://12345akram.github.io/',
    demo: 'https://demo2.com'
  }, {
    id: 4,
    img: php_project,
    title:'php_liravil_project',
    github: 'https://12345akram.github.io/',
    demo: 'https://demo2.com'
  }, {
     id: 5,
    img: dashboard,
    title:'dashboard',
    github: 'https://12345akram.github.io/',
    demo: 'https://demo2.com'
  }, {
   id: 6,
    img: java_web,
    title:'java_web_project',
    github: 'https://12345akram.github.io/',
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
          <a href={github} target="_blank" className="btn btn-primary">get hub</a>
           <a href={demo}  target="_blank" className="btn btn-primary">live dome</a>
        </div>
      </article>

      ))}
      
    </div>
  </section>
  );
};

export default Projects;
