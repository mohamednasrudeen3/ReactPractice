import Contact from "./Contact"
import personA from "./images/personA.png"
import personB from "./images/personB.png"
import personC from "./images/personC.png"
import personD from "./images/personD.png"
function App(){
  return(
    <div className="contacts">
      
      <Contact
        img={personA}
        name="RajniKanth"
        phone="9776387473"
        email="superstar@gmail.com"
      />
      <Contact
        img={personB}
        name="KamalHassan"
        phone="9781738743"
        email="ulaganayagan@gmail.com"
      />

      <Contact
        img={personC}
        name="Joseph Vijay"
        phone="9788738703"
        email="thalapathy@gmail.com"
      />
      <Contact
        img={personD}
        name="Ajith Kumar"
        phone="92887387473"
        email="thala@gmail.com"
      />
    </div>
  )
}

export default App 