import React from "react";
import myworkdata from "../assets/myworkdata";
import "./MyWork.css";
import { FaGithub, FaPlayCircle, FaEnvelope, FaArrowRight } from "react-icons/fa";

const MyWork = () => {
  return (
    <section className="mywork" id="mywork">

      <h2>Projects</h2>

      <p className="project-desc">
        Here are some of my recent works. Each project is built with passion and creativity.
      </p>

      <div className="work-container">
        {myworkdata.map((item, index) => (
          <div className="work-card" key={index}>

            <img src={item.w_img} alt={item.w_title} />

            <h3>{item.w_title}</h3>

            <p className="card-desc">
              {item.description}
            </p>

            <div className="work-links">

              {item.github && (
                <a href={item.github} target="_blank" rel="noreferrer">
                  GitHub <FaGithub />
                </a>
              )}

              {item.live && (
                <a href={item.live} target="_blank" rel="noreferrer">
                  Live Demo <FaPlayCircle />
                </a>
              )}

            </div>

          </div>
        ))}
      </div>

      <div className="project-contact">

        <div className="contact-left">

          <div className="contact-icon">
            <FaEnvelope />
          </div>

          <div>
            <h3>Have a project in mind?</h3>
            <p>
              I'm always open to discussing new opportunities and exciting
              projects.
            </p>
          </div>

        </div>

        <a href="#contact" className="contact-btn">
          Contact Me <FaArrowRight />
        </a>

      </div>

    </section>
  );
};

export default MyWork;