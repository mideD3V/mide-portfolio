import React from "react";
import Header from "./header";
import Mide from "../asset/mide404.PNG";
import ProjCard from "./projcard";
import Dodov from "../asset/dodov.png";
import "../App.css";

const body = () => {
  return (
    <div className="body">
      <Header />
      <div className="hero">
        <div className="hero--txt">
          <h5>Hi, Welcome</h5>
          <h1>Ayomide Oke</h1>
          <p>
            I'm a <b>FrontEnd Developer</b>
          </p>
          <button>HIRE ME</button>
        </div>
      </div>

      {/* ABOUT ME */}
      <section id="about">
        <div className="about--me">
          <div className="about-img">
            <img src={Mide} alt="" />
          </div>
          <div className="about--txt">
            <h1>ABOUT ME</h1>
            <p>
              Hello, I am a Frontend Web Developer from Lagos, Nigeria. I am
              passionate about leveraging Technology for creative problem
              solving. I have experience developing web apps for businesses. I
              am proficient using HTML, CSS, JavaScript, React, Bootstrap.
              <br />I would love to talk with you about your project. Feel free
              to send me a message though the message box at the end of this
              page.
            </p>
            <button>Contact me > </button>
          </div>
        </div>

        {/* MY SKILLS */}
        <div className="skills">
          <h2>Technical Skills</h2>
          <div className="skills-ctn">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              target="_blank"
              rel="noreferrer"
              className="skill--card"
            >
              <h3>HTML</h3>
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target="_blank"
              rel="noreferrer"
              className="skill--card"
            >
              <h3>CSS</h3>
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
              className="skill--card"
            >
              <h3>JavaScript</h3>
            </a>

            <a
              href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started"
              target="_blank"
              rel="noreferrer"
              className="skill--card"
            >
              <h3>ReactJS</h3>
            </a>
            <a
              href="https://v2.tailwindcss.com/docs"
              target="_blank"
              rel="noreferrer"
              className="skill--card"
            >
              <h3>TailwindCSS</h3>
            </a>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <h1>RECENT PROJECTS</h1>

        <div className="proj-ctn">
          <a
            href="https://rasheedatj.github.io/Team-2-dodov/"
            target="_blank"
            rel="noreferrer"
          >
            <ProjCard />
          </a>

          <ProjCard />
          <ProjCard />
        </div>
      </section>

      {/* FOOTER */}
      <section id="footer"></section>
    </div>
  );
};

export default body;
