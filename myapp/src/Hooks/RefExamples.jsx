import React, { useRef, useState } from 'react'
import Video from "./Video.mp4"
const RefExamples = () => {
    // let myrsf = useRef();
    // // console.log(myrsf);
   
    const[play,setPlay]= useState(true);
    let videoRef = useRef();
    console.log(videoRef);
    let playORpause=()=>{
      if(play === true){
        videoRef.current.play();
        setPlay(false)
        console.log(play);
      }else{
        videoRef.current.pause();
        setPlay(true)
        console.log(play);
      }
    }

  return (
    <div>
      <h1>RefExamples</h1>
      <h1><video src={Video}ref={videoRef}onClick={playORpause}>hi</video></h1>
    </div>
  )
}

export default RefExamples
