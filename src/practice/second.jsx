import {createElement} from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById('root'));
// const reactElement = createElement("h1", null,"This is example of create Element");
const reactElement2 = <h1>Hello we simply implement HTML in create element</h1>
console.log(reactElement2);
root.render(
  reactElement2
)