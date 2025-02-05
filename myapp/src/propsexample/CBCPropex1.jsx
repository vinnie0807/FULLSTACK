import React, { Component } from 'react'

export default class CBCPropex1 extends Component {
  render() {
    console.log(this);
    return (
      <div>
        <h1>{this.props.username}</h1>
        <h2>{this.props.age}</h2>
        <h2>{this.props.desig[0]}</h2>
        <h2>{this.props.userDetails.area}</h2>
        <button onClick={this.props.sendFun}>click here</button>
      </div>
    )
  }
}
