import React, { Component } from 'react'

export default class CBStateex extends Component {
    constructor(){
        super();
        this.state={
            username:"BVK",
            count:0
        };
    }
    // changeName=()=>{
    //     this.setState({username:"BODDU VINAY KUMAR"})
    // }
    // changeName1=()=>{
    //     this.setState({username:"VINAY"})
    // }
    add=()=>{
        this.setState({count:this.state.count+1})
    }
    sub=()=>{
        this.setState({count:this.state.count-1})
    }
    reset=()=>{
        this.setState({count:0})
    }
  render() {
    console.log(this)
    return (
      <div>
        CBStateEx
        <hr/>
        {/* <h1>{this.state.username}</h1>
        <button onClick={this.changeName} onDoubleClick={this.changeName1}>Update value</button> */}
        <h1>{this.state.count}</h1>
        <button onClick={this.add}>+1</button>
        <button onClick={this.sub}>-1</button>
        <button onClick={this.reset}>0</button>
      </div>
    )
  }
}
