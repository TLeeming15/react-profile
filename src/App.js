
import './App.css'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Contact from './Contact'
import Resume from './Resume'

import { useState } from 'react';

function App() {
  
  const [page, changePage] = useState("about-me");

  function renderPage(page) {
    switch(page) {
      case "about-me":
        return <AboutMe></AboutMe>;
      case "my-work":
        return <Projects></Projects>;
      case "contact-me":
        return <Contact></Contact>
      case "resume":
        return <Resume></Resume>
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <nav id='menu'>
          <h1 className="name">Tyler Leeming</h1>
        <a
          className={page === "about-me"?"active":""}
          href="#"
          rel="noopener noreferrer"
          onClick={()=>{
            changePage("about-me")
          }}
          >
          About Me 
        </a>
        <a
          className={page === "my-work"?"active":""}
          href="#"
          rel="noopener noreferrer"
          onClick={()=>{
            changePage("my-work")
          }}
        >
          Portfolio 
        </a>
        <a
          className={page === "contact-me"?"active":""}
          href="#"
          rel="noopener noreferrer"
          onClick={()=>{
            changePage("contact-me")
          }}
        >
          Contact Me
        </a>
        <a
          className={page === "resume"?"active":""}
          href="#"
          rel="noopener noreferrer"
          onClick={()=>{
            changePage("resume")
          }}
        >
          Resume
        </a>
        </nav>
      </header>
      <main id='page'>
        {renderPage(page)}
      </main>
      <div id="footer">
        <a
        className="footer"
        href= "https://github.com/TLeeming15"
        >
          <img src = "https://tleeming15.github.io/my-portfolio/assets/images/github-icon.png" alt="Github logo"/>
          Github
        </a>

        <a
        className="footer"
        href= "https://twitter.com/TylerLeeming"
        >
           <img src = "https://tleeming15.github.io/my-portfolio/assets/images/twitter-icon.png" alt="Twitter logo"/>
          Twitter
        </a>

        <a
        className="footer"
        href= "https://www.linkedin.com/in/tyler-leeming-890226276/"
        >
           <img src = "https://tleeming15.github.io/my-portfolio/assets/images/linkedin-icon.png" alt="LinkedIn logo"/>
          LinkedIn
        </a>
      </div>
    </div>
  );
  
}

export default App;
