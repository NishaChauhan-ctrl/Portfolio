import React from 'react';
import Home from './sections/Home';
import Projects from './sections/Projects';
import About from './sections/About';
import Resume from './sections/Resume';
import Contact from './sections/Contact';

function App() {
  return (
    <main>
      <Home />
      <Projects />
      <About />
      <Resume />
      <Contact />
    </main>
  );
}

export default App;