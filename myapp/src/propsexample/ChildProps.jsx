import React from 'react'
import './style.css'
const ChildProps = (props) => {
  let inline ={
    color:'Red',
    frontSize:'300px'
  }
  return (
    <div>
      <h1 className='heading'>ChildProps {props.city} </h1>
      <hr/>
      <h2 style={inline}>HELLO</h2>
    </div>
  )
}

export default ChildProps
