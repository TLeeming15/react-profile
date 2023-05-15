import { useState } from 'react';
import "./Resume.css"

function Resume() {
return (
    <section>
    <div className= "resume">
        <h2>Resume</h2>
    </div>
    <div>
    <h2>Front-End Proficiencies</h2>
    <ul>
    <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
    </ul>
    <h2>Back-End Proficencies</h2>
    <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
    </div>


    </section>
      );    
    }
    
    export default Resume;