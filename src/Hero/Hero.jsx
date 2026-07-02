
import React from 'react'
import './Hero.css';
import { Link } from "react-scroll";
import profileImg from '../images/profilee.png';
import { FaReact, FaHtml5, FaJs } from "react-icons/fa";

const Hero = () => {
  return (
    <div id="hero" className='hero'>
      
      <div className="hero-left">
        <h1>Hello, I'm <br />
        <span>Aashika Chaudhary</span>
        </h1>
        <h2 className='typing-text'>Full-Stack Developer</h2>
        <p>
          I love building clean, responsive, and interactive websites.
          Currently, I am learning React and modern web technologies
          to improve my skills and grow as a professional developer.
        </p>

        <div className="hero-action">
          <div className="hero-connect">
            <Link to="mywork" 
            smooth={true} offset={-50} 
            duration={500} className="anchor-link">
              View projects
            </Link>
          </div>
    <button
  onClick={() => window.open("/aashika.pdf", "_blank")}
  className="hero-resume"
>
  Download CV
</button>
        </div>
      </div>

      <div className="hero-right">

  <div className="glow"></div>
  <img src={profileImg} alt="profile" className="profile-img" />

  <div className="tech-icon react">
    <FaReact />
  </div>

  <div className="tech-icon html">
    <FaHtml5 />
  </div>

  <div className="tech-icon js">
    <FaJs />
  </div>

</div>

    </div>
  )
}

export default Hero;