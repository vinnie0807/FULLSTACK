import React, { useEffect,useState } from 'react'

const ExUseEffect = () => {
    // const [count,setCount] = useState(0);
    // useEffect(()=>{
    //     document.title="VK"
    //     setTimeout(()=>{
    //         setCount(100);
    //     },4000)
    //     setTimeout(()=>{
    //         setCount(110);
    //     },1000)
    // })
    const[user,setUser]=useState([]);
    console.log(user);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json().then(data=>{
            setUser(data)}))
        .catch(error=>console.log(error))
    },[])
  return (
    <div>
        <h1>UseEffect</h1>
        {/* <h1>Count</h1>
      <h1>{count}</h1> */}
     { user.map((user , i)=> {
            return(
                <React.Fragment key={i}>
                    <h1>{user.name}</h1>
                </React.Fragment>
            )
      })
    }
    </div>
  )
}

export default ExUseEffect
