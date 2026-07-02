import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero';
import About from './About/About';
import MyWork from './MyWork/MyWork'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'




const App = () => {
   const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div  className={theme}> 
     <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero/>
     <About/>
     <MyWork/>
     <Contact/>
     <Footer/>
    </div>
    
  )
}


export default App;



