import { createRoot } from "react-dom/client"
import {Fragment} from "react";
import Whatever from "./FunFact/Header";
import Wewant from "./FunFact/MainContent"
import ForEx from "./FunFact/Footer"

const root = createRoot(document.getElementById('root'));
function Page(){
  return(
    <Fragment>
      <Whatever/>
      <Wewant/>
      <ForEx/>    
    </Fragment>
  )
}


root.render(
  <Page/>
)