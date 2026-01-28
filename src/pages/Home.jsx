import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <h1>
        Hi, I’m <span className="highlight">Pau Serrano</span>
      </h1>

      <h2>Junior Full Stack Developer (MERN)</h2>

      <p>
        Junior Full Stack Developer with hands-on experience building web
        applications using React, Node.js, MongoDB and SQL.
        After completing a full stack bootcamp, I’m focused on strengthening
        my fundamentals and building real-world projects.
      </p>

      <p>
        I’m currently looking for a <strong>junior developer role</strong> where
        I can grow, learn from a team, and contribute with clean and maintainable code.
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