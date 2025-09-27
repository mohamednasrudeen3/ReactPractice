import React from "react";
import "./one.css"
import {useState} from "react"

export default function App(){
  const [count, setCount]=React.useState(0)
  function add(){
    setCount((prevCount)=>prevCount+1)
  
  }


  function subract(){
    setCount((prevCount)=>prevCount-1) 
  }

  const [isGoingOut,setIsGoingOut] = useState(false)


  return(
    <>
    <main className="container">
      <h1>How many times will Bob say "state" in this section?</h1>
      <div>
        <button className="minus" onClick={subract} aria-label="Decrease count">-</button>
        <h2 className="count">{count}</h2>
        <button className="plus"onClick={add} aria-label="Increase Count">+</button>
      </div>
    </main>
    <navbar>
      <h1 className="title">Do I feel like going out tonight?
      </h1>
      <button onClick={()=>{setIsGoingOut(!isGoingOut)}} className="value">{isGoingOut?"Yes":"No"}</button>
    </navbar>
    </>
  )
}