import React, { Component } from 'react';
import BasicInfo from './Person/Person';
import './App.css';
class Medium extends Component {
    constructor(props) {
        super(props);
            this.state = {
                persons: {
                    name: "Naven Kennedy",
                    phone:"704-555-5555",
                    dob:"September 18th 1994",
                    email:"navenkennedy@gmail.com"
            }
        }
    }
  render() {
  return (
    <div className="App">
   <BasicInfo name = {this.state.persons.name} phone={this.state.persons.phone} dob={this.state.persons.dob} email = {this.state.persons.email}>
   </BasicInfo>
    </div>
  );
}
}
export default Medium;


