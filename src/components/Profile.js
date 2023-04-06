import React, { Component } from 'react'

export default class Profile extends Component {
  render() {
  // this.props.first_name = 'Hello';
  const { data1, data2 } =  this.props;
    return (
      <div>
       <h1> {data1 } { data2}</h1>
      </div>
    )
  }
}
