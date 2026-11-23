import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import About from './About/About';
import MyWork from './MyWork/MyWork';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

const App = () => {
  const [theme, setTheme] = useState("light");

  const getInitialPage = () => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (['about', 'contact', 'projects'].includes(hash)) {
      return hash;
    }
    return 'home';
  };

  const [activePage, setActivePage] = useState(getInitialPage);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['about', 'contact', 'projects'].includes(hash)) {
        setActivePage(hash);
      } else {
        setActivePage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handlePageChange = (page) => {
    setActivePage(page);
    if (page === 'home') {
      window.history.pushState(null, '', window.location.pathname);
    } else {
      window.location.hash = page;
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={theme}> 
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        activePage={activePage} 
        setActivePage={handlePageChange} 
      />
      
      {activePage === 'home' && (
        <main>
          <Hero setActivePage={handlePageChange} />
          <About />
          <MyWork setActivePage={handlePageChange} />
          <Contact />
        </main>
      )}

      {activePage === 'about' && (
        <main className="page-single">
          <About />
        </main>
      )}

      {activePage === 'projects' && (
        <main className="page-single">
          <MyWork setActivePage={handlePageChange} />
        </main>
      )}

      {activePage === 'contact' && (
        <main className="page-single">
          <Contact />
        </main>
      )}

      <Footer setActivePage={handlePageChange} />
    </div>
  );
};

export default App;
