import React, { Component } from 'react';


export default class Result extends Component {
  render() {
    return (
      <div className="result">
          <p>{this.props.message}</p>
      </div>
    );
  }
}
