import React, { Component } from 'react';

class Timer extends Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toUTCString()} in {this.props.country}</h2>
      </div>
    );
  }
}

export default Timer;
