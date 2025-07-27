import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import './styles.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Destinations />
      <AboutUs />
      <Footer />
    </Router>
  );
};

export default App;
