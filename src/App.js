
import React from 'react';
import './App.css';
import Rout from './pages/Routes';
import { BrowserRouter as Router } from 'react-router-dom';


import MoviesProvider from './MoviesProvider';

function App() {
  return (
    <div>
      <Rout/>
      </div>
  );
}

export default App;