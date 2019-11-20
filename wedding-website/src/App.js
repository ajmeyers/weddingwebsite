import React from 'react';
// import logo from './logo.svg';
import Engaged from "./engaged.JPG";
// import Background from "./background.jpg";
import Countdown from 'react-countdown-now';


import './App.css';


function App() {
 
  return (
    <div className="App">
    
      <link href="https://fonts.googleapis.com/css?family=Dancing+Script&display=swap" rel="stylesheet"></link>
      <h1>Giselle and Andrew</h1>
      <img src = {Engaged} alt="Engaged" width="525" height="400"/>
      <h1>Countdown until our Wedding Day!</h1>
      <Countdown date={Date.now() + 10000}/>

     {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header> */ }
    </div>
  );
}

export default App;
