import logo from './logo.svg';
import './App.css';
import Merch from './Merch';
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <div className="taskBar" >

        <div className="startButton" ></div>

      </div>



      <Routes>
          
          <Route path="/Merch" element={<Merch/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
