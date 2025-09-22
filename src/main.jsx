import { createRoot } from "react-dom/client";
import {createElement} from "react";
import App from "./practice/Project2/App";
import Navbar from "./practice/Project2/Navbar"
import Main from "./practice/Project2/Main"


const root = createRoot(document.getElementById('root'))
root.render(
  <>
 <App/>
 <Navbar/>
 <Main/>
</>
);

