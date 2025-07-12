import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ContentSection from './components/ContentSection';
import Services from './components/Services';
import Timeline from './components/Timeline';
import FullscreenSection from './components/FullscreenSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

import About from './pages/About'; 

import './styles.css';

function HomePage() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Features />
      <ContentSection />
      <Services />
      <Timeline />
      <FullscreenSection />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
