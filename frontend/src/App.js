import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './App.css';
import Header from "./components/Header/Header";
import Landing from './pages/Landing/Landing';
import Login from './pages/Login-Signup/Login';
import Discover from './pages/Discover/Discover';
import Signup from './pages/Login-Signup/Signup';
import Footer from './components/Header/Footer';

function App() {
  
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/discover" element={<Discover/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;