
import React from 'react';
import './App.css';
import Rout from './pages/Routes';
import { BrowserRouter as Router } from 'react-router-dom';


import MoviesProvider from './MoviesProvider';

function App() {
  return (
    <MoviesProvider>
     <Rout/>
     </MoviesProvider>
  );
}

export default App;