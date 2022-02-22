import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import LengthSetting from './components/LengthSetting';
import Timer from './components/Timer';
import Controls from './components/Controls';


function App() {
  const defaultBreakLength = 5;
  const defaultSessionLength = 25;

  const [ breakTime, setBreakTime ] = useState(defaultBreakLength);
  const [ sessionTime, setSessionTime ] = useState(defaultSessionLength);

  function handleReset() {
    setBreakTime(defaultBreakLength);
    setSessionTime(defaultSessionLength);
  }

  return (
    <div>
      <h1>25 + 5 Clock</h1>
      <div>
        <LengthSetting name='Break Length' value={breakTime} />
        <LengthSetting name='Session Length' value={sessionTime} />
      </div>
      <Timer />
      <Controls />
    </div>
  );
}

export default App;