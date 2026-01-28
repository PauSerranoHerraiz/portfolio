function About() {
  const skills = [
    "JavaScript (ES6+)",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Mongoose",
    "Git & GitHub",
    "HTML5 & CSS3",
    "TailwindCSS",
    "REST APIs"
  ];

  return (
    <section className="about">
      <h1>About Me</h1>

      <p>
        I'm a Junior Full Stack Developer based in Spain, passionate about building
        clean and functional web applications using modern technologies.
      </p>

      <p>
        After completing an intensive full stack bootcamp, I've gained hands-on experience
        with the MERN stack through projects like collaborative task managers, digital music
        libraries, and interactive games. I focus on writing maintainable code and solving
        real-world problems.
      </p>

      <p>
        I'm actively seeking a junior developer position where I can contribute to
        meaningful projects, learn from experienced developers, and grow within a
        collaborative team environment.
      </p>

      <h2>Tech Stack</h2>

      <div className="skills-tags">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default About;