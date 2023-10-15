import logo from './logo.svg';
import './App.css';
import Merch from './Merch';
import {Route, Routes} from "react-router-dom";
import Home from './Home';
import Artists from './Artists';

function App() {
  return (
    <div className="App">

      <div className="taskBar" >

        <div className="startButton" ></div>

      </div>



      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Merch" element={<Merch/>}></Route>
          <Route path="/Artists" element={<Artists/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
