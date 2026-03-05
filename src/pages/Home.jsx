import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <div className="home-badge">
        <span className="home-badge-dot" aria-hidden="true"></span>
        Available for new opportunities
      </div>

      <h1>
        Hi, I'm <span className="highlight">Pau Serrano Herráiz</span>
      </h1>

      <p className="home-subtitle">Full Stack Developer · MERN Stack</p>

      <p className="home-description">
        Full Stack Developer with hands-on experience building web applications
        using React, Node.js, and MongoDB. After completing an intensive bootcamp
        I've focused on strengthening my fundamentals and shipping real-world
        projects from end to end.
      </p>

      <p className="home-description">
        I'm currently looking for a <strong>developer role</strong> where I can
        grow, learn from a team, and contribute with clean, maintainable code.
      </p>

      <div className="home-buttons">
        <Link to="/projects" className="btn primary">
          View Projects
        </Link>

        <Link to="/contact" className="btn secondary">
          Contact Me
        </Link>
      </div>
    </section>
  );
}

export default Home