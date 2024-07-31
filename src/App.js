import React from 'react';
import Home from './components/Home'
import Navbar from './components/Navbar';
import About from './components/About'
import ContactCard from './components/ContactCard';
import Portfolio from './components/Portfolio';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Home />
      <Navbar />
      <About />
      <Portfolio/>
      <ContactCard/>      
    </div>
  );
}

export default App;

