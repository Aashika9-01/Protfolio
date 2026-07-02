import React from 'react'
import './About.css'
import profile_img from '../images/aashi.png';
import { FaHtml5, FaCss3Alt, FaReact, FaPhp} from "react-icons/fa";
import {  SiJavascript } from "react-icons/si";

const About = () => {
  return (
    <div className='about'>
        <div className="about-sections">
          <div className="about-left">
            <img src={profile_img} alt="Profile"/>
          </div>
          <div className="about-right">
            <div className="about-title">
            <h1>About Me</h1>
        </div>
            <div className="about-para">
             <p>
I am a Computer Science student with a strong passion for
Front-End Development. I enjoy creating clean, responsive,
and user-friendly web applications using modern technologies.
</p>
             <p>
Currently, I am learning React, PHP, and MySQL by building
real-world projects. My goal is to become a Full Stack Web
Developer and continuously improve my skills.
</p>
            </div>

            <div className="about-skills">
              <div className="about-skill"><FaHtml5 color="#E34F26" className="skill-icon"/><p>HTML</p>
              <hr style={{width:"80%"}}></hr></div>
              <div className="about-skill"><FaCss3Alt color="#264E84" className="skill-icon"/><p>CSS</p>
              <hr style={{width:"80%"}}></hr></div>
              <div className="about-skill"><SiJavascript color="#F7DF1E" className="skill-icon"/><p>JavaScript</p>
              <hr style={{width:"60%"}}></hr></div>
              <div className="about-skill"><FaReact color="#61DAFB" className="skill-icon"/><p>React</p>
              <hr style={{width:"40%"}}></hr></div>
              <div className="about-skill"><FaPhp color="#777BB4" className="skill-icon"/><p>PHP</p>
              <hr style={{width:"30%"}}></hr></div>
            </div>
          </div>
        </div>
        

    </div>
  )
}

export default About