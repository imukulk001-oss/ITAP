import React from 'react';
import Header2 from './components/Header2';
import HeroSection from './components/HeroSection';
import AppsCatalog from './components/AppsCatalog';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header2 />
      <HeroSection />
      <AppsCatalog />
      <Footer />
    </div>
  );
}

export default App;

