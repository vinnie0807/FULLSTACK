import React, { Component } from 'react'
import './Froms.css'
export default class Froms extends Component {
    constructor(props){
        super(props);
        this.state={
            textValue:'',skill:'view'
        }
    }
    changeText=(event)=>{
        this.setState({
            textValue:event.target.value
        })
    }
    changeSkill=(event)=>{
        this.setState({
            skill:event.target.value
        })
    }
    submitValues=(event)=>{
        alert(`Form is submitted: ${this.state.textValue} ${this.state.skill}`)
        event.preventDefault();
    }
  render() {
    return (
      <div>
        <form onSubmit={this.submitValues}>
            <label>Enter Your Name: </label>
            <input type='text' placeholder='enter your name' value={this.state.textValue}onChange={this.changeText}></input>
           <br></br>
            <label>  skills:</label>
              
            <select value={this.state.skill} onChange={this.changeSkill}>
                <option value='react'>React</option>
                <option value='Angular'>Angular</option>
                <option value='vue'>Vue</option>
            </select>
            <br/>
            <button type='submit'>submit</button>
           
        </form>
      </div>
    )
  }
}
