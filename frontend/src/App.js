import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Landing from './Landing';
import Login from './Login';
import Discover from './Discover';
import Signup from './Signup';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/discover" element={<Discover/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;