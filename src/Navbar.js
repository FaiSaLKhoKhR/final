// import React from 'react'
import React, { useState, useEffect } from 'react';
import Article from './Article';
import About from './About';
import data from './data';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  


const getStorageTheme = () => {
    let theme = 'light-theme';
    if (localStorage.getItem('theme')) {
      theme = localStorage.getItem('theme');
    }
    return theme;
  };
  
  function Navbar() {
    const [theme, setTheme] = useState(getStorageTheme());
  
    const toggleTheme = () => {
      if (theme === 'light-theme') {
        setTheme('dark-theme');
      } else {
        setTheme('light-theme');
      }
    };
  
    useEffect(() => {
      document.documentElement.className = theme;
      localStorage.setItem('theme', theme);
    }, [theme]);

  return (
    <>
      <Router>
    <main>
    <nav style={{backgroundColor:"pink"}}>
        <div className="nav-center">
          <h1>Practice-Here</h1>
          <Link to="/">Article-Home</Link>
          <Link to="/about">About</Link>
          <button className="btn" onClick={toggleTheme}>
            Toggle
          </button>
        </div>
      </nav>

{/* <section className="articles">
{data.map((item) => {
  return <Article key={item.id} {...item} />;
})}
</section> */}


<Routes>
  <Route exact path='/' element={<Article />}/>
  <Route exact path='/about' element={<About />}/>
</Routes>


    </main>
</Router>
    </>
  )
}

export default Navbar
