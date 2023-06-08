import React from 'react';
import { Navigate, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../component/home';
import {InfoPelis} from '../component/infoPelis';



const Rout = () => {
    return (
        <Routes>
        <Route path="/about" element={<InfoPelis/>} />
        </Routes>
    );
  };
  
  export default Rout;