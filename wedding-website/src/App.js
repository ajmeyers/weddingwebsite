import React from 'react';
// import logo from './logo.svg';
import Engaged from "./engaged.JPG";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  
  return (
    <div className="App">
    
      <h1>Giselle and Andrew</h1>
      <img src = {Engaged} alt="Engaged" width="525" height="400"/>
      <h1>Countdown until our Wedding Day! </h1>
      <p id ="countdown"></p>
      <h2>RSVP Here</h2>

      
    </div>
    
  );
}

var countDownDate = new Date("May 25, 2020 10:00:00")
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("countdown").innerHTML = days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds ";
  
  if (distance <= 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Just Married!";
  } 

},1000)

export default App;