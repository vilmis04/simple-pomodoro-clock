import logo from './logo.svg';
import React, { useState } from 'react';
import LengthSetting from './components/LengthSetting';
import Timer from './components/Timer';
import Controls from './components/Controls';


function App() {
  const defaultBreakLength = 5;
  const defaultSessionLength = 25;

  const [ breakTime, setBreakTime ] = useState(defaultBreakLength);
  const [ sessionTime, setSessionTime ] = useState(defaultSessionLength);
  // const [ sessionTime, setSessionTime ] = useState(defaultSessionLength);

  function handleReset() {
    setBreakTime(defaultBreakLength);
    setSessionTime(defaultSessionLength);
  }

  function handleTimer(timer, step) {
    switch (timer) {
      case 'Break Length':
        updateTimer(setBreakTime, breakTime, step);
        break;
      case 'Session Length':
        updateTimer(setSessionTime, sessionTime, step);
        break;
    }

  }

  function updateTimer(callback, state, step) {
    const MIN_TIME = 1;
    const MAX_TIME = 60;

    if ((state > MIN_TIME && step<=0) || (state < MAX_TIME && step>=0)) {
            callback(state + step);
          }
  }

  return (
    <div>
      <h1>25 + 5 Clock</h1>
      <div>
        <LengthSetting name='Break Length' value={breakTime} handleClick={(t,s) => handleTimer(t,s)} />
        <LengthSetting name='Session Length' value={sessionTime} handleClick={(t,s) => handleTimer(t,s)} />
      </div>
      <Timer />
      <Controls /> 
    </div>
  );
}

export default App;