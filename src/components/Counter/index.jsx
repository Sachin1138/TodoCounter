import React, { Fragment, useState } from 'react'
import Button from './Button'
import Displaycount from './Displaycount';

const Counter = () => {
  const [counter,setCounter]=useState(0);
const onClick=(type)=>{
  switch (type) {
    case "increment":
      setCounter(counter+1)
      
      break;
      case "decrement":
      setCounter(counter-1)
      
      break;
      case "double":
      setCounter(counter*2)
      
      break;
  
    default:
      break;
  }
}

  return (
      <Fragment>
    <Displaycount counter={counter} />
    <div>
      <Button onClick={()=>onClick("increment")} label={"+"}/>
      <Button onClick={()=>onClick("decrement") }label={"-"}/>
      <Button onClick={()=>onClick("double") } label={"double"}/>

    </div>
    </Fragment>
  )
}

export default Counter