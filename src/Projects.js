
import "./Projects.css"
import tradieProject from "../src/assets/images/TAA-Logo.png"
import triviaProject from "../src/assets/images/5minute-trivia.png"
import skillsMatch from "../src/assets/images/skills-match.png"
import techBlog from "../src/assets/images/tech-blog.png"
import readMe from "../src/assets/images/readme-generator.png"
import teamProfile from "../src/assets/images/team-profile.png"

function Projects() {
return (
<div id="projects">
        <h2>Projects</h2>
        <main id="projects-cards">

            <article className="card">
            <a href="https://intense-fjord-33779.herokuapp.com/">
                <h3>Tradies Anywhere Anytime</h3>
                <img alt="project" src={tradieProject}/>
                </a>
                <a href="https://github.com/BenArmstrong81/Tradies-Anytime-Anywhere">
                <p>View Github Repo here</p>
                </a>
            </article>

            <article className="card">
            <a href="https://nileshpatel83.github.io/Trivia-Games/">
                <h3>Trivia Application</h3>
               <img alt="project" src={triviaProject}/>
               </a>
               <a href="https://github.com/NileshPatel83/Trivia-Games">
                <p>View Github Repo here</p>
                </a>
            </article>

            <article className="card">
            <a href="https://spicy-pencils-skills-matcher-1.herokuapp.com/">
                <h3>Skills Match Application</h3>
                <img alt="project" src={skillsMatch}/>
                </a>
                <a href="https://github.com/lilyhargreaves/spicy-pencils-skills-matcher">
                <p>View Github Repo here</p>
                </a>
            </article>

            <article className="card">
            <a href="https://technology-blogaroony.herokuapp.com/">
                <h3>Tech-Blog</h3>
                <img alt="project" src={techBlog}/>
                </a>
                <a href="https://github.com/TLeeming15/tech-blog">
                <p>View Github Repo here</p>
                </a>
            </article>

            <article className="card">
            <a href=" https://drive.google.com/file/d/1RL4b8qjUy-Q0ZNNYMn1nFXZw1dgOXNoF/view">
                <h3>README Generator</h3>
                <img alt="project" src={readMe}/>
                </a>
                <a href="https://github.com/TLeeming15/readme-generator">
                <p>View Github Repo here</p>
                </a>
            </article>

            <article className="card">
            <a href="https://watch.screencastify.com/v/KoKfy8GluVH0hEK1Exle">
                <h3>Team Profile Generator</h3>
                <img alt="project" src={teamProfile}/>
                </a>
                <a href="https://github.com/TLeeming15/team-profile-generator">
                <p>View Github Repo here</p>
                </a>
            </article>

        </main>

    </div>
      );
    }
    
    export default Projects;