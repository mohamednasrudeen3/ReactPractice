import {createElement} from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById('root'));
const reactElement = createElement("h1", null,"This is example of create Element");

console.log(reactElement);
root.render(
  reactElement
)