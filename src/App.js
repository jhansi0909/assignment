import logo from './logo.svg';
import './App.css';
import Newone from './component/Newone';
import {Routes, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
     <Routes>
     <Route  path="/" element={<Newone></Newone>}></Route>
     <Route  path="/Newone" element={<Newone></Newone>}></Route>
     </Routes>
    </div>
  );
}

export default App;
