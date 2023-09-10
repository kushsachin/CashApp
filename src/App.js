import React from 'react'
import './App.css';
import Banking from './Components/Banking';
import CashAppHero from './Components/CashAppHero';
import CashCard from './Components/CashCard';
import Investing from './Components/Investing';
import Payments from './Components/Payments';

function App() {
  return (
    <div className="App">
      {/* Section wise Components */}
      <CashAppHero/>
      <Payments/>
      <Banking/>
      <CashCard/>
      <Investing/>
    </div>
  );
}

export default App;
