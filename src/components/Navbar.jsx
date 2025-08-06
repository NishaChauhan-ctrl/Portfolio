import React from 'react';

const Navbar = () => {
  const scrollTo = id => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="nav">
      <div
        className="nav-logo"
        onClick={() => scrollTo('home')}
        style={{ cursor: "pointer" }}
      >
        Nisha Chauhan
      </div>
      <div className="nav-links">
        <button onClick={() => scrollTo('home')}>Home</button>
        <button onClick={() => scrollTo('about')}>About</button>
        <button onClick={() => scrollTo('resume')}>Resume</button>
        <button onClick={() => scrollTo('projects')}>Projects</button>
        <button onClick={() => scrollTo('contact')}>Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;
