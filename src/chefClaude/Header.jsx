import chef from "./images/chef.png"
import "./chef.css"
export default function Header(){
  return(
    <header>
       <img src={chef} alt="chef Claude Icon Images"/>
       <h1>Chef Claude</h1>
    </header>
  )
}