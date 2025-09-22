import image from "../components/globe.png"
import "./travel.css"

export default function Header(){
  return(
    <header>
      <img src={image} alt="Image"></img>
      <h1>My Travel journal</h1>
    </header>
  )
}