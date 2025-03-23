import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './Component/Navbar/Navbar';
import { BrowserRouter } from "react-router-dom";
import Landingpage from './pages/Landingpage/Landingpage';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar />
    <Landingpage />
    </div>
    </BrowserRouter>
  );
}

export default App;
