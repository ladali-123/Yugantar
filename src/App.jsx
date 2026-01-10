import React from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import Gallery from './components/Gallery'
import Features from './components/Features';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CallToAction from './components/CallToAction';


function App() {
  return (
    <div className="App">
      <Header />
      <HeroBanner />
      <Gallery/>
      <Features />
      <Services />
      <About />
      <Testimonials />
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;