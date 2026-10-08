import { useState } from "react";
import "./App.css";
import profile from "./assets/profile.jpg";

function App() {
  const [user, setUser] = useState(null);

  // API Demo
  const getUser = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();

      setUser(data.results[0]);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <nav>
        <h2>Ankit Pandey</h2>

        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#api-demo">API Demo</a>
          <a href="#contact">Contact</a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </nav>


      {/* ================= HOME ================= */}

      <section id="home">

        <img
          src={profile}
          alt="Ankit Pandey"
          className="profile-photo"
        />

        <h1>Hi, I'm Ankit Pandey</h1>

        <h2>Software Developer</h2>

        <p>
          Computer Science graduate passionate about building web
          applications, REST APIs, and AI-powered solutions. I am
          currently focusing on React, JavaScript, Java, SQL, and
          backend development.
        </p>

        <div className="home-buttons">

          <a href="#projects">
            <button>View My Projects</button>
          </a>

          <a href="#contact">
            <button className="secondary-btn">
              Contact Me
            </button>
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="resume-btn">
              View Resume
            </button>
          </a>

        </div>
      </section>


      {/* ================= ABOUT ================= */}

      <section id="about">

        <h2>About Me</h2>

        <p>
          I am a Computer Science graduate interested in software
          development and modern web technologies. I have experience
          working with Java, JavaScript, React, SQL, REST APIs and
          backend technologies. I am passionate about learning new
          technologies and building practical software solutions.
        </p>

      </section>


      {/* ================= SKILLS ================= */}

      <section id="skills">

        <h2>Skills</h2>

        <div className="skills-container">

          <div className="skill-card">Java</div>

          <div className="skill-card">JavaScript</div>

          <div className="skill-card">React.js</div>

          <div className="skill-card">HTML</div>

          <div className="skill-card">CSS</div>

          <div className="skill-card">SQL</div>

          <div className="skill-card">REST API</div>

          <div className="skill-card">Python</div>

          <div className="skill-card">C#</div>

          <div className="skill-card">.NET</div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section id="projects">

        <h2>My Projects</h2>

        <div className="projects-container">

          {/* Project 1 */}

          <div className="project-card">

            <h3>One Job Portal</h3>

            <p>
              An AI-based job recommendation platform that brings
              job listings from multiple sources into one platform
              and helps users find relevant job opportunities.
            </p>

            <small>
              React | JavaScript | REST API | PostgreSQL | NLP
            </small>

          </div>


          {/* Project 2 */}

          <div className="project-card">

            <h3>Weather App</h3>

            <p>
              A weather application that provides real-time weather
              information using city search and the user's current
              location.
            </p>

            <small>
              HTML | CSS | JavaScript | OpenWeatherMap API
            </small>

          </div>


          {/* Project 3 */}

          <div className="project-card">

            <h3>Enterprise AI Research Agent</h3>

            <p>
              An AI-powered document question-answering system using
              Retrieval Augmented Generation, embeddings and
              similarity search.
            </p>

            <small>
              Python | FastAPI | PostgreSQL | RAG | Embeddings
            </small>

          </div>

        </div>

      </section>


      {/* ================= API DEMO ================= */}

      <section id="api-demo">

        <h2>API Integration Demo</h2>

        <p>
          This section demonstrates how a React application can
          consume data from an external REST API.
        </p>

        <br />

        <button onClick={getUser}>
          Get Random User
        </button>


        {user && (

          <div className="user-card">

            <img
              src={user.picture.large}
              alt="Random User"
            />

            <h3>
              {user.name.first} {user.name.last}
            </h3>

            <p>{user.email}</p>

            <p>{user.location.country}</p>

          </div>

        )}

      </section>


      {/* ================= CONTACT ================= */}

      <section id="contact">
  <h2>Contact Me</h2>

  <p>
    I'm open to software development opportunities and
    interesting projects.
  </p>

  <div className="contact-links">
    <a
      href="https://www.linkedin.com/in/ankitpandey08/"
      target="_blank"
      rel="noopener noreferrer"
    >
      LinkedIn
    </a>

    <a
      href="https://github.com/Ankitdev2001"
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub
    </a>
  </div>
</section>

    </>
  );
}

export default App;