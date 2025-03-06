import React, { useState, useEffect } from 'react';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Pricing from './components/Pricing/Pricing';
import Team from './components/Team/Team';
import WorkingHour from './components/WorkingHour/WorkingHour';
import Testimonial from './components/Testimonial/Testimonial';
import Footer from './components/Footer/Footer';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <section id="about"></section>
      <About />
      <section id="services"></section>
      <Services />
      <section id="pricing"></section>
      <Pricing />
      <Team />
      <WorkingHour /> 
      <Testimonial />
      <section id = "contact"></section>
      <Footer />
    </div>
  );
};

export default App;
