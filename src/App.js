import React from "react";
import "./App.css";
import { Route,Routes} from "react-router-dom";
import Signup from './Pages/Signup'
/**
 * ?  =====Import Components=====
 */
import Home from "./Pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home  />} />
      <Route path="/signup" exact element={<Signup  />} />

    </Routes>
  );
}

export default App;
