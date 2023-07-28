import React from "react";
import Header from "./header";

import MideHero from "../asset/mid3v.png";

import ProjCard from "./projcard";
import Dodov from "../asset/dodov.png";

import myCV from '../asset/Ayomide - CV.pdf'
import "../App.css";

import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const body = () => {
  return (
    <div className="body">
      <Header />
      <section className="hero">
        <span className="heroimg">
          <img src={MideHero} alt="" srcset="" />
        </span>
        <div className="hero--txt">
          <h5>Hi, Welcome!</h5>
          <h1>Ayomide Oke</h1>
          <p>
            I'm a <b>FrontEnd Developer</b>
          </p>
          <div className="hero-btn">
            <a href={myCV} download id="downloadcv">
              Download CV
            </a>
            <a href="#contact">
              <button>HIRE ME</button>
            </a>
          </div>
        </div>
        <div className="socials-ctn">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            {" "}
            <FaLinkedin />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>

          <span></span>
        </div>
      </section>

      {/* ABOUT ME */}
      <section id="about">
        <div className="about--me">
          <div className="about-img">
            <img src={MideHero} alt="" />
          </div>
          <div className="about--txt">
            <h1>ABOUT ME</h1>
            <p>
              👋 Hi, I'm Ayomide Oke, a passionate and detail-oriented Frontend
              Developer with a drive for creating seamless and user-centric web
              experiences.
              <br />
              <br />
              💡 I thrive on finding creative solutions to complex challenges
              and take pride in crafting visually engaging and responsive user
              interfaces. Collaborating with talented teams during my internship
              at Zuri Teams Inc. further deepened my skills and passion for the
              tech industry.
              <br />
              <br />
              🌱 Beyond coding, I enjoy sharing my knowledge and empowering
              others through software training sessions. When not coding, you'll
              find me indulging in photography, playing musical instruments, or
              immersing myself in board games.
              <br />
              <br />
              🤝 I'm always open to exciting projects, collaboration
              opportunities, and new connections in the tech community. Let's
              create meaningful and impactful solutions together!
              <br />
              <br />
              Feel free to send me a message.
            </p>
            <button>Contact me</button>
          </div>
        </div>
      </section>
      {/* MY SKILLS */}
      <section className="myskills">
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
        <h1>PROJECTS</h1>
        <p className="pro-t-des">Some of my recently completed projects</p>

        <div className="proj-ctn">
          <a
            href="https://rasheedatj.github.io/Team-2-dodov/"
            target="_blank"
            rel="noreferrer"
            className="project"
          >
            <ProjCard />
          </a>
          <a
            href="https://whoismide.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="project"
          >
            <ProjCard />
          </a>

          <a
            href="https://whoismide.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="project"
          >
            <ProjCard />
          </a>
          <a
            href="https://whoismide.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="project"
          >
            <ProjCard />
          </a>
        </div>
      </section>

      {/* CONTACT */}

      <section id="contact">
        <h1>LET'S CONNECT</h1>
        <p>
          Feel free to speak to me about your project. I will be happy to hear
          from you
        </p>
        <form action="" method="post">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Enter your full name"
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
          />

          <label htmlFor="name">Message</label>
          <textarea name="message" id="" cols="30" rows="10">
            Enter your message here
          </textarea>

          <button type="submit">SEND MESSAGE</button>
        </form>

      </section>
      {/* FOOTER */}
      <section id="footer">
        <div id="logo">
          <a href="#"> ayomideOKE</a>
        </div>


        <div className="socials">
          <a href="https://www.linkedin.com/in/mid3/" className="icon">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/mide_dev" className="icon">
            <FaTwitter />
          </a>
          <a href="https://github.com/mided3v/" className="icon">
            <FaGithub />
          </a>
        </div>


        
      </section>
    </div>
  );
};

export default body;
