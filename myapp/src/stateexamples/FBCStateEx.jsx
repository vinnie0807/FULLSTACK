import React,{useState} from 'react'

const FBCStateEx = () => {
    const [value,setvalue]=useState("BVK")
    let Changevalue =()=>{
        setvalue("BOODU VINAY KUMAR")
    }
    let Changevalue1 =()=>{
        setvalue("BVK")
    }
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={Changevalue} onDoubleClick={Changevalue1}>CLICK HER TO CHANGE VALUE</button>
    </div>
  )
}

export default FBCStateEx
