import React, {useState} from 'react';
import './App.css';
import GamePage from './components/GamePage';
import LandingPage from './components/LandingPage';

function App() {

  const [start, setStart] = useState(false);


  return (
    <div className="App">
      {
        !start? <LandingPage setStart={setStart}/>: <GamePage /> 
      }
    </div>
  );
}

export default App;
