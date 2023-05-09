
import { useState } from 'react';
import "./Projects.css"

function Projects() {
return (
<div id="projects">
        <h2>Projects</h2>
        <main id="projects-cards">

            <article className="card">
                <h3>Trivia Application</h3>
                <img alt="project" src="https://tleeming15.github.io/my-portfolio/assets/images/trivia-app.png"/>
            </article>

            <article className="card">
                <h3>Skills Match Application</h3>
                <img alt="project" src="https://tleeming15.github.io/my-portfolio/assets/images/homepage.png"/>
            </article>

            <article className="card">
                <h3>Tech-Blog</h3>
                <img alt="project" src="https://github.com/TLeeming15/tech-blog/raw/main/assets/images/login.png"/>
            </article>

            <article className="card">
                <h3>README Generator</h3>
                <img alt="project" src="https://github.com/TLeeming15/readme-generator/raw/main/Develop/images/example-readme.png"/>
            </article>

            <article className="card">
                <h3>Team Profile Generator</h3>
                <img alt="project" src="https://github.com/TLeeming15/team-profile-generator/raw/main/images/team-generated.png"/>
            </article>

            <article className="card">
                <h3>Password Generator</h3>
                <img alt="project" src="https://github.com/TLeeming15/password-generator/raw/main/assets/images/p-g-generated-password.png"/>
            </article>
           
        </main>

    </div>
      );
    }
    
    export default Projects;