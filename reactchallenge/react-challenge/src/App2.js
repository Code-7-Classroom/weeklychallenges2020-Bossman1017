import React, { Component } from 'react';
import './App.css';
import Person from './BasicInfo';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            person: [
                {
                    Name: "Naven Kennedy",
                    Phone: "704-555-5555" ,
                    DOB: "September 18, 1994"
                },
                {
                    Name: "Joseph Williams",
                    Phone: "704-555-5556",
                    DOB: "April 17, 1993"
                },
                {
                    Name: "Vanessa Webb",
                    Phone: "252-555-6709",
                    DOB: "September 8, 1991"
                }
            ]
        }
    }
    render() {
        return <Person person={this.state.person} />
    }
}



export default App;