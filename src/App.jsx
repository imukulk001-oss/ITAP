import React from 'react';
import Header1 from './components/Header1';
import Header2 from './components/Header2';
import HeroSection from './components/HeroSection';
import LoginSection from './components/LoginSection';
import AppsCatalog from './components/AppsCatalog';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header1 />
      <Header2 />
      <HeroSection />
      <LoginSection />
      <AppsCatalog />
      <Footer />
    </div>
  );
}

export default App;

