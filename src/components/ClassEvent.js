import React, { Component } from 'react'

export default class ClassEvent extends Component {

    handleClick()
    {
        console.log('class based event button clicked');
    }

  render() {
    return (
      <div>
        This is a class based Component
        <button onClick={this.handleClick}>Click here</button>
      </div>
    )
  }
}
