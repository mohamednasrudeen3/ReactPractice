import { createRoot } from "react-dom/client";
import { createElement } from "react";

const root = createRoot(document.getElementById("root"));

function Page(){
  return(
    <ol>
      <li>My Name is Mohamed Nasrudeen</li>
      <li>My Brother Name is Mohamed yaseen</li>
    </ol>
  )
}

root.render(
  <Page/>
)