import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tertimonials from './components/Tertimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Accordion from "./components/Accordion";


function App() {
  return (
    <div >
      <Navbar />
      <Hero />
      <About />
      <Tertimonials />
      <Accordion />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
