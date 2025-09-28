import "./one.css"
import {useState} from "react"

export default function App(){
  // const [count, setCount]=React.useState(0)
  // function add(){
  //   setCount((prevCount)=>prevCount+1)
  
  // }


  // function subtract(){
  //   setCount((prevCount)=>prevCount-1) 
  // }

  // const [isGoingOut,setIsGoingOut] = useState(false)

  // function changeMind(){
  //   setIsGoingOut(prev=>!prev)
  // }

  // return(
  //   <>
  //   <main className="container">
  //     <h1>How many times will Bob say "state" in this section?</h1>
  //     <div>
  //       <button className="minus" onClick={subtract} aria-label="Decrease count">-</button>
  //       <h2 className="count">{count}</h2>
  //       <button className="plus"onClick={changeMind} aria-label="Increase Count">+</button>
  //     </div>
  //   </main>
  //   <navbar>
  //     <h1 className="title">Do I feel like going out tonight?
  //     </h1>
  //     <button onClick={changeMind}
  //      className="value"
  //      aria-label={`Current answer is ${isGoingOut? "Yes" : "No"}. Click to change it`}
  //      >{isGoingOut?"Yes":"No"}</button>
  //   </navbar>
  //   </>
  // )

const [myfavoriteThings,setMyfavoriteThings]=useState([])
  const allFavouriteThings = [
  "😀", "😂", "🥰", "😎", "🤩", 
  "🐶", "🐱", "🦁", "🐼", "🐵", 
  
];

const thingsElements = myfavoriteThings.map(thing=><p key={thing}>{thing}</p>)

function addFavouriteThings(){
  setMyfavoriteThings(prevFavouriteThings=>[...prevFavouriteThings,allFavouriteThings[prevFavouriteThings.length]])
}


return(
<main>
<button onClick={addFavouriteThings}>Add Item</button>
<section aria-live="polite">
  {thingsElements}
</section>
</main>
)
}
