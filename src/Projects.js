
import { useState } from 'react';
import "./Projects.css"

function Projects() {
return (
<div id="projects">
        <h2>Projects</h2>
        <main id="projects-cards">

            <article className="card first">
                <h3>Trivia Application</h3>
                <img alt="project" src="assets/images/5minute-triva.png"/>
            </article>

            <article className="card">
                <h3>Skills Match Application</h3>
                <img alt="project" src="assets/images/skills-match.png"/>
            </article>

            <article className="card">
                <h3>Regex Gist</h3>
                <img alt="project" src="assets/images/regex-gist.png"/>
            </article>

            <article className="card">
                <h3>README Generator</h3>
                <img alt="project" src="assets/images/readme-generator.png"/>
            </article>

            <article className="card">
                <h3>Team Profile Generator</h3>
                <img alt="project" src="assets/images/team-profile.png"/>
            </article>

            <article className="card">
                <h3>Password Generator</h3>
                <img alt="project" src="assets/images/password-generator.png"/>
            </article>
           
        </main>

    </div>
      );
    }
    
    export default Projects;