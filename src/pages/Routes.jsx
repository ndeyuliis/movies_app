import React from 'react';
import { Navigate, BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import Home from '../component/home';
import {InfoPelis} from '../component/infoPelis';
import MoviesProvider from '../MoviesProvider';
import NavBar from "../component/navBar";




const Rout = () => {
    return (
      <div> 
        <Router>
        <NavBar/>
        <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/infopelis/:id" element={<InfoPelis />}/>
        </Routes>
      </Router>
      </div>
    );
  };

  export default Rout;

