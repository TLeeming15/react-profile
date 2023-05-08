import { useState } from 'react';
import "./AboutMe.css"

function AboutMe() {
  /**
   * Equivalent:
   * 
   * let page = "about-me";
   * 
   * // changePage("my-work");
   * function changePage(newPage) {
   *  this.page = newPage;
   *  refreshTheLayout();
   * }
   * 
   */
  return (
    <div id="about-me">
        <section id="hero">
        <figure>
            <img alt="family" src="https://tleeming15.github.io/my-portfolio/assets/images/IMG_2280.JPG"/>
            <figcaption>
                <h1>Tyler Leeming</h1>
                <span>Coding Enthusiast</span>
            </figcaption>
        </figure>
    </section>
    <main id="bio">
        <h2>About Me</h2>
        <p>I am currently working as a Teacher three days a week and a Swimming Pool Tiler two days a week. I am a life long learner and am very excited to continue to develop my skills in this field. I have recently enrolled in a Coding Bootcamp to enhance my coding knowledge. This is a space where I will display my projects as I continue to develop.</p>
    </main>
      
    </div>
  );
}

export default AboutMe;
