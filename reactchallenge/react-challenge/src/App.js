import React, { Component } from 'react';
import VeryEasy from './challenges/VeryEasy.js';
import './App.css';
import Medium from './challenges/Medium.js';
import Easy from './challenges/Easy.js';



class App extends Component {
  render () {
    return (
      <div className="App">
        <VeryEasy />
        <Easy />
        <Medium />
      </div>
    );
  }
}



export default App;