import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import LengthSetting from './components/LengthSetting';
import Timer from './components/Timer';
import Controls from './components/Controls';


function App() {
  return (
    <div>
      <h1>25 + 5 Clock</h1>
      <div>
        <LengthSetting name='Break Length' value={breakLength} />
        <LengthSetting name='Session Length' value={sessionLength} />
      </div>
      <Timer />
      <Controls />
    </div>
  );
}

export default App;