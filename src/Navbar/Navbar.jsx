import React, { useState } from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'
import menu from '../images/menu-1.jpg'

const Navbar =  ({ theme, toggleTheme }) => {
  const[showMenu,setShowMenu]=useState(false);
  
  return (

      <nav className="navbar">
        <div className="nav-logo">
  <h2>
    Aashika<span>{"</>"}</span>
  </h2>
</div>
        <div className='nav-menu'>
          

          <Link  activeClass='active' to='hero' spy={true} smooth={true} offset={-100} duration={500} className='nav-menuListItem'>Home</Link>
          <Link  activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className='nav-menuListItem'>About Me</Link>
          <Link activeClass='active' to="mywork" spy={true} smooth={true} offset={-80} duration={500} className='nav-menuListItem'>Projects</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='nav-menuListItem'>Contact Me</Link>
        </div>
        <button className="theme-btn" onClick={toggleTheme}>
  {theme === "dark" ? "☀️" : "🌙"}
</button>

  
        <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
         <div className='navMenu' style={{display: showMenu ? 'flex' :'none'}} >
          <Link  activeClass='active' to='hero' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Home</Link>
          <Link  activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className='ListItem'onClick={()=>setShowMenu(false)}>About Me</Link>
          <Link activeClass='active' to="mywork" spy={true} smooth={true} offset={-80} duration={500} className='ListItem'onClick={()=>setShowMenu(false)}>Projects</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='ListItem'onClick={()=>setShowMenu(false)}>Contact Me</Link>
        </div>
      </nav>
  )
}

export default Navbar