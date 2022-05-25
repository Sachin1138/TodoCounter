import React from 'react'

const Displaycount = (props) => {
    const classname=props.counter %2 ===0 ?"green":"red";
  return (
    <h1 style={{color:classname}}>{props.counter}</h1>

  )
}

export default Displaycount