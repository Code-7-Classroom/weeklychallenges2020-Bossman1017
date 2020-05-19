import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
            this.state = {
                persons: {

                
            }
        }
    }
  render() {
  return (
    <div className="App">
   <h1>Naven Kennedy</h1>
   <p>704-555-5555</p>
   <p>September 18, 1994</p>
   <p>navenkennedy@gmail.com</p>
    </div>
  );
}
}
export default App;
