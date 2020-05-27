import React, { Component } from 'react';
class Person extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.person.map(info => (
            <p>Name: {info.Name} Phone: {info.Phone} DOB: {info.DOB} </p>
          ))}
        </ul>
      </div>
    )
  }
  }
export default Person;