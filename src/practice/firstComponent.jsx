
import { createRoot } from "react-dom/client"
function MainComponent(){
  return(
  <h1>Hi This Is Nasrudeen</h1>)
}
const root = createRoot(document.getElementById('root'))

root.render(
  <div>
    <MainComponent/>
  </div>
)