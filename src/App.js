import React from "react";
import Simulation from "./Components/Simulation";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Aim from "./Components/Aim";
import Theory from "./Components/Theory";
import Procedure from "./Components/Procedure";
import Objective from "./Components/Objective";
import Assignment from "./Components/Assignment";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<NavBar />} />
          <Route path="/aim" element={<Aim />} />
          <Route path="/theory" element={<Theory />} />
          <Route path="/objective" element={<Objective/>} />
          <Route path="/simulation" element={<Simulation/>} />
          <Route path="/procedure" element={<Procedure/>} />
          <Route path="/assignment" element={<Assignment/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
