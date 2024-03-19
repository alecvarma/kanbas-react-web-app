import Kanbas from "./Kanbas";
import './App.css';
import Labs from "./Labs";
import { HashRouter } from "react-router-dom";
import HelloWorld from "./Labs/a3/HelloWorld";

function App() {
   return (
      <HashRouter>
      <div>
         <Labs/>
      </div>
      </HashRouter>
);}
// .
export default App;
