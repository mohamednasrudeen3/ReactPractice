import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById('root'));

function Page(){
  return(
    <main>
      <header>
      <img src="./src/practice/image.png" width="60px" alt="react-logo"/>
      </header>
      <h1>Fun Facts About React</h1>
      <ul>
        <li>i want to Learn React</li>
        <li>Beacuse i want to place in Job</li>
        <li>with High Paying salary</li>
      </ul>
      <footer> 
        <small>c2025 nasrudeen development . All rights reserved</small>
      </footer>
    </main>
  )
}


root.render(
  <Page/>
)