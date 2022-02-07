import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';

import './App.css';
import Header from "./components/Header.js"
import Body from './components/Body.js';
import AccessPage from './components/AccessPage.js';

function App() {

  return (
    <div className="app">
      <Router>
        {/* Header */}
        <Header className="header"/>
        {/* Navigator */}
        {/* Body */}
        <Routes>
          <Route exact path="/" element={<Body/>}/>

          <Route path="/login" element={<AccessPage/>}/>


        </Routes>
      </Router>
    </div>
  );
}

export default App;
