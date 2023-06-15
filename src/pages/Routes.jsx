import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "../component/home";
import { InfoPelis } from "../component/infoPelis";
import NavBar from "../component/navBar";

const Rout = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/infopelis/:id" element={<InfoPelis />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Rout;
