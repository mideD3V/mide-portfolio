import React from "react";
import Header from "./header";

import MideHero from "../asset/mid3v.png";

//projects
import ProjCard from "./projcard";
import Dodov from "../asset/dodov.png";
import myPort from "../asset/projects/portfolio.png";
import ageCalc from "../asset/projects/age-calculator.png";
import contactApp from "../asset/projects/contact-app.png";
import Screened from "../asset/projects/screened.png";

import myCV from "../asset/Ayomide - CV.pdf";
import "../App.css";
import ContactForm from "./contactForm";

import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { BsTelephoneOutboundFill, BsInstagram } from "react-icons/bs";

const body = () => {
  return (
    <div className="body">
      <Header />
      <section className="hero">
        <span className="heroimg">
          <img src={MideHero} alt="" srcset="" />
        </span>
        <div className="hero--txt">
          <h5>Hi, Welcome! My name is;</h5>
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
          <a
            href="https://twitter.com/ayobilli0ns"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/ayobilli0ns/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram />
          </a>

          <span></span>
        </div>
      </section>
      {/* PROJECTS */}
      <section id="projects">
        <h1>PROJECTS</h1>
        <p className="pro-t-des">
          Here are some of my recently completed projects
        </p>

        <div className="proj-ctn">
          <ProjCard
            image={Screened}
            className="card2"
            title="SCREENED: A movie blogsite"
            description="A movie blogsite for movie enthusiasts. Collaborated with a cross-functional team to develop this project."
            tools="HTML, CSS, JavaScript, Django"
            link="http://screened.up.railway.app"
            link2="https://github.com/mideD3V/Screened-Movie-Blog"
          />
          <ProjCard
            title="My personal porfolio"
            image={myPort}
            description="A portfolio website built from scratch to display my skills and qualifications."
            tools="HTML, CSS, ReactJS"
          />

          <ProjCard
            image={contactApp}
            className="card2"
            title="Contact App"
            description="An app that can be used to add details of member to a list."
            tools="HTML, CSS, and JavaScript"
          />

          <ProjCard image={ageCalc} />

          <ProjCard />
        </div>
      </section>
      {/* MY SKILLS */}
      <section className="myskills">
        <div className="skills">
          <h1>Technical Skills</h1>
          <div className="skills-ctn">
            <span className="html skill--card"></span>
            <span className="css skill--card"></span>
            <span className="js skill--card"></span>
            <span className="react skill--card"></span>
            <span className="tailwind skill--card"></span>
          </div>
        </div>
      </section>

      {/* ABOUT ME */}
      <section id="about">
        <div className="about--me">
          <div className="about-img">
            <img src={MideHero} alt="" />
          </div>
          <div className="about--txt">
            <h1>MY STORY</h1>
            <p>
              👋 Hi, I'm Ayomide Oke, a passionate and detail-oriented Frontend
              Developer with a drive for creating seamless and user-centric web
              experiences.
              <br />
              💡 I thrive on finding creative solutions to complex challenges
              and take pride in crafting visually engaging and responsive user
              interfaces. Collaborating with talented teams during my internship
              at Zuri Teams Inc. further deepened my skills and passion for the
              tech industry.
              <br />
              🌱 Beyond coding, I enjoy sharing my knowledge and empowering
              others through software training sessions. When not coding, you'll
              find me indulging in photography, playing musical instruments, or
              immersing myself in board games.
              <br />
              🤝 I'm always open to exciting projects, collaboration
              opportunities, and new connections in the tech community. Let's
              create meaningful and impactful solutions together!
              <br />
              Feel free to send me a message.
            </p>
            <button>CONTACT ME</button>
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section id="contact">
        <h1>LET'S CONNECT</h1>
        <p>
          I will be happy to hear about your project and ideas. Feel free to get
          in touch with me using the contact form. <br /> I welcome any
          inquiries, feedback, or collaboration opportunities.
        </p>
        <ContactForm />
      </section>
      {/* FOOTER */}
      <section id="footer">
        <dir>
          <div id="logo" className="footer-logo">
            <a href="#"> ayoBilli0ns</a>
          </div>
          <div className="footer-contact">
            <p>
              <MdEmail /> ayomideoke9@gmail.com
            </p>
            <p>
              <BsTelephoneOutboundFill />
              +2348162087291
            </p>
            <p>
              <MdLocationPin /> Global
            </p>
          </div>
        </dir>
        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/mid3/" className="icon">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/ayobilli0ns" className="icon">
            <FaTwitter />
          </a>
          <a href="https://github.com/mided3v/" className="icon">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/ayobilli0ns/" className="icon">
            <BsInstagram />
          </a>
        </div>
        <div className="copyright"> Copyright @2023. All rights reserved</div>
        <div className="credit">Designed and developed my mid3Billi0ns.</div>
      </section>
    </div>
  );
};

export default body;
