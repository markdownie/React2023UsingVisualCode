import logo from './logo.svg';
import './App.css';

import { Test } from './components/Test.tsx';
import { Card } from './components/Card.tsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Test />
        <Card />
      </header>
    </div>
  );
}

export default App;
