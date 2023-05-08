
import { useState } from 'react';
import "./Projects.css"

function Projects() {
return (
<div id="projects">
        <h2>Projects</h2>
        <main id="projects-cards">

            <article className="card first">
                <h3>Trivia Application</h3>
                <img alt="project" src="https://tleeming15.github.io/my-portfolio/assets/images/trivia-app.png"/>
            </article>

            <article className="card">
                <h3>Skills Matcher App</h3>
                <img alt="project" src="https://tleeming15.github.io/my-portfolio/assets/images/homepage.png"/>
            </article>

            <article className="card">
                <h3>Horiseon Refactor</h3>
                <img alt="project" src="https://tleeming15.github.io/my-portfolio/assets/images/project-1.jpeg"/>
            </article>

            <article className="card">
                <h3>Project 4</h3>
                <img alt="project" src="https://tleeming15.github.io/my-portfolio/assets/images/project-4.jpg"/>
            </article>
            <article className="card">
                <h3>Project 5</h3>
                <img alt="project" src="https://tleeming15.github.io/my-portfolio/assets/images/project-5.jpg"/>
            </article>
           
        </main>

    </div>
      );
    }
    
    export default Projects;