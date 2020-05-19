import React, { Component } from 'react';
import './App.css';
import BasicInfo from './Person/Person';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      persons: [
        {name: "Naven Kennedy",
        phone: "704-555-5555",
        dob: "September 18, 1994",
        email: "navenkennedy@gmail.com"},
        {name: "Joseph Williams",
        phone: "704-555-5556",
        dob: "April 17, 1993",
        email: "jo.williams@yahoo.com"},
        {name: "Vanessa Webb",
        phone: "704-222-5555",
        dob: "Sepetember 8th ,1991",
        email: "vwebb@yahoo.com"},
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.persons.map(person => {
          return (
            <BasicInfo name={person.name} phone={person.phone} dob={person.dob} email={person.email}/>
          )
        })}  
      </div>
    );
  }
}

export default App;