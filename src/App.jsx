import { useState } from "react";
import emailjs from "@emailjs/browser";

import "./App.css";

import profile from "./assets/profile.jpg";

function App() {

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(false);

  const [apiError, setApiError] = useState("");

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [contactStatus, setContactStatus] = useState("");

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setContactStatus("");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: contactForm.name,
          from_email: contactForm.email,
          message: contactForm.message,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setContactStatus("Message sent successfully!");
      setContactForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email sending failed:", error);
      setContactStatus("Message could not be sent. Please try again.");
    } finally {
      setSending(false);
    }
  };

  // API Demo

  const getUser = async () => {

    setLoading(true);

    setApiError("");

    try {

      const response = await fetch("https://randomuser.me/api/");

      if (!response.ok) {

        throw new Error("Failed to fetch user data.");

      }

      const data = await response.json();

      setUser(data.results[0]);

    } catch (error) {

      console.error("Error fetching user:", error);

      setApiError("Unable to load user. Please try again.");

    } finally {

      setLoading(false);

    }

  };

  // Project details

  const projects = [

    {

      title: "One Job Portal",

      description:

        "An AI-based job recommendation platform that brings job listings from multiple sources into one platform and helps users find relevant job opportunities.",

      technologies:

        "React | JavaScript | REST API | PostgreSQL | NLP",

      github: "https://github.com/Ankitdev2001",

      demo: "",

    },

    {

      title: "Weather App",

      description:

        "A weather application that provides weather information using city search and the user's current location.",

      technologies:

        "HTML | CSS | JavaScript | Weather API",

      github: "https://github.com/Ankitdev2001",

      demo: "",

    },

    {

      title: "Enterprise AI Research Agent",

      description:

        "An AI-powered document question-answering system using Retrieval Augmented Generation, embeddings and similarity search.",

      technologies:

        "Python | FastAPI | PostgreSQL | RAG | Embeddings",

      github: "https://github.com/Ankitdev2001",

      demo: "",

    },

    {

      title: "My Developer Portfolio",

      description:

        "A personal portfolio website showcasing my skills, projects, resume and contact details, with a retro-inspired design and API integration.",

      technologies:

        "React | JavaScript | CSS | Vite | REST API",

      github: "https://github.com/Ankitdev2001/my-portfolio",

      demo: "",

    },

  ];

  return (

    <>

      {/* NAVBAR */}

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

      {/* HOME */}

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

      {/* ABOUT */}

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

      {/* SKILLS */}

      <section id="skills">

        <h2>Skills</h2>

        <div className="skills-container">

          {[

            "Java",

            "JavaScript",

            "React.js",

            "HTML",

            "CSS",

            "SQL",

            "REST API",

            "Python",

            "C#",

            ".NET",

          ].map((skill) => (

            <div className="skill-card" key={skill}>

              {skill}

            </div>

          ))}

        </div>

      </section>

      {/* PROJECTS */}

      <section id="projects">

        <h2>My Projects</h2>

        <div className="projects-container">

          {projects.map((project) => (

            <div className="project-card" key={project.title}>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <small>{project.technologies}</small>

              <div className="project-buttons">

                <a

                  href={project.github}

                  target="_blank"

                  rel="noopener noreferrer"

                  className="project-btn github-btn"

                >

                  GitHub ↗

                </a>

                {project.demo ? (

                  <a

                    href={project.demo}

                    target="_blank"

                    rel="noopener noreferrer"

                    className="project-btn demo-btn"

                  >

                    Live Demo ↗

                  </a>

                ) : (

                  <span className="project-btn demo-btn disabled-btn">

                    Demo Coming Soon

                  </span>

                )}

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* API DEMO */}

      <section id="api-demo">

        <h2>API Integration Demo</h2>

        <p>

          This section demonstrates how a React application can

          fetch and display data from an external REST API.

        </p>

        <button onClick={getUser} disabled={loading}>

          {loading ? "Loading..." : "Get Random User"}

        </button>

        {apiError && <p role="alert">{apiError}</p>}

        {user && (

          <div className="user-card">

            <img

              src={user.picture.large}

              alt="Random user"

            />

            <h3>

              {user.name.first} {user.name.last}

            </h3>

            <p>{user.email}</p>

            <p>{user.location.country}</p>

          </div>

        )}

      </section>

      {/* CONTACT */}

      {/* CONTACT */}
      <section id="contact">
        <h2>Contact Me</h2>
        <p>
          Have a job opportunity or project in mind? Feel free to send me a
          message.
        </p>

        <form className="contact-form" onSubmit={handleContactSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            autoComplete="name"
            value={contactForm.name}
            onChange={(e) =>
              setContactForm({ ...contactForm, name: e.target.value })
            }
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            autoComplete="email"
            value={contactForm.email}
            onChange={(e) =>
              setContactForm({ ...contactForm, email: e.target.value })
            }
            required
          />

          <textarea
            name="message"
            placeholder="Write your message..."
            value={contactForm.message}
            onChange={(e) =>
              setContactForm({ ...contactForm, message: e.target.value })
            }
            rows="5"
            required
          />

          <button type="submit" disabled={sending}>
            {sending ? "Sending..." : "Send Message"}
          </button>

          {contactStatus && <p role="status">{contactStatus}</p>}
        </form>

        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/ankitpandey08/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>

          <a
            href="https://github.com/Ankitdev2001"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>

          <a href="mailto:pandeyankit5767@gmail.com">Email Me</a>
        </div>
      </section>

      {/* FOOTER */}

      <footer>

        <p>

          © {new Date().getFullYear()} Ankit Pandey | Built with React

        </p>

      </footer>

    </>

  );

}

export default App;
