import './App.css';
import Banking from './Components/Banking';
import CashAppHero from './Components/CashAppHero';
import CashCard from './Components/CashCard';
import Investing from './Components/Investing';
import Payments from './Components/Payments';

function App() {
  return (
    <div className="App">
      <CashAppHero/>
      <h1>sss</h1>
      <Payments/>
      <Banking/>
      <CashCard/>
      <Investing/>
    </div>
  );
}

export default App;
