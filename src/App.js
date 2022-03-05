import React, { useState, useEffect } from 'react';
import LengthSetting from './components/LengthSetting/LengthSetting';
import Timer from './components/Timer/Timer';
import Controls from './components/Controls/Controls';


function App() {
  const defaultBreakLength = 5;
  const defaultSessionLength = 25;

  const [ breakTime, setBreakTime ] = useState(defaultBreakLength);
  const [ sessionTime, setSessionTime ] = useState(defaultSessionLength);
  const [ stage, setStage ] = useState('Session');
  const [ remainingTime, setRemainingTime ] = useState(sessionTime*60);
  const [ isActive, setIsActive ] = useState(false);

  if (remainingTime < 0) {
    handleOutOfTime();
  }
  if (remainingTime === 0) {
    document.querySelector('#beep').play();
  }

  function handleReset() {
    const audio = document.querySelector('#beep');
    if (!audio.paused) {
      audio.pause();
      audio.load();
    }
    setBreakTime(defaultBreakLength);
    setSessionTime(defaultSessionLength);
    setStage('Session');
    setRemainingTime(defaultSessionLength*60);
    setIsActive(false);
  }

  function handleTimer(timer, step) {
    if (isActive) return;
    switch (timer) {
      case 'Break Length':        
        updatePresetTime(setBreakTime, breakTime, step);
        
        break;
      case 'Session Length':
        updatePresetTime(setSessionTime, sessionTime, step);
        break;
    }

  }

  function updatePresetTime(callback, state, step) {
    const MIN_TIME = 1;
    const MAX_TIME = 60;

    if ((state > MIN_TIME && step<=0) || (state < MAX_TIME && step>=0)) {
      const timePreset = state + step;
      callback(timePreset);
      if (stage === 'Break' && callback === setBreakTime) {
        setRemainingTime(timePreset*60);
      } else if (stage === 'Session' && callback === setSessionTime) {
        setRemainingTime(timePreset*60);
      }
    }
  }

  function startPauseTimer() {
    setIsActive(!isActive);
  }

  useEffect(() => {
    let timer = null;
    if (isActive) {
      timer = setInterval(() => {
        setRemainingTime(remainingTime-1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  });

  function handleOutOfTime () {
    if (stage === 'Session') {
      setStage('Break');
      setRemainingTime(breakTime*60);
    } else {
      setStage('Session');
      setRemainingTime(sessionTime*60);
    }
  }

  return (
    <div>
      <h1>25 + 5 Clock</h1>
      <div>
        <LengthSetting name='Break Length' value={breakTime} handleClick={(t,s) => handleTimer(t,s)} />
        <LengthSetting name='Session Length' value={sessionTime} handleClick={(t,s) => handleTimer(t,s)} />
      </div>
      <Timer stage={stage} time={remainingTime} />
      <audio id="beep" preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
      <Controls startPause={startPauseTimer} reset={handleReset} /> 
    </div>
  );
}

export default App;