import logo from './logo.svg';
import './App.css'
import AboutMe from './AboutMe'
import Projects from './Projects'

import { useState } from 'react';

function App() {
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
  const [page, changePage] = useState("about-me");

  function renderPage(page) {
    switch(page) {
      case "about-me":
        return <AboutMe></AboutMe>;
      case "my-work":
        return <Projects></Projects>;
      case "contact-me":
        return "My contact page coming soon!"
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <nav id='menu'>
        <a
          className="App-link"
          href="#"
          rel="noopener noreferrer"
          onClick={()=>{
            changePage("about-me")
          }}
          >
          About Me
        </a>
        <a
          className="App-link"
          href="#"
          rel="noopener noreferrer"
          onClick={()=>{
            changePage("my-work")
          }}
        >
          My Work
        </a>
        <a
          className="App-link"
          href="#"
          rel="noopener noreferrer"
          onClick={()=>{
            changePage("contact-me")
          }}
        >
          Contact Me
        </a>
        </nav>
      </header>
      <main id='page'>
        {renderPage(page)}
      </main>
    </div>
  );
}

export default App;
