import React from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery'
import Features from './components/Features';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CallToAction from './components/CallToAction';
import Experts from './components/Experts';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Layout from './components/Layout';import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
        {/* Layout Route */}
        
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/gallery" element={<Home />} />
          <Route path="/features" element={<Home />} />
          <Route path="/services" element={<Home />} />
          <Route path="/experts" element={<Home />} />
          <Route path="/testimonials" element={<Home />} />
          <Route path="/call-to-action" element={<Home />} />
          <Route path="/contact" element={<Home />} />

        </Route>

        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;