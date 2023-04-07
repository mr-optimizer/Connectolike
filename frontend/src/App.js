import React from "react";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import CircularProgress from "@mui/material/CircularProgress";

import Header from "./components/Header/Header";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login-Signup/Login";
import Discover from "./pages/Discover/Discover";
import Signup from "./pages/Login-Signup/Signup";
import Footer from "./components/Header/Footer";
import MyProfile from "./pages/My-Profile/MyProfile";
import FAQs from "./pages/FAQs/FAQs";
import Doubts from "./pages/Doubts/Doubts";

function App() {
  const { loading } = useSelector((state) => state.alert);
  return (
    <div className="App">
      <Router>
        {loading && (
        <div className="spinner-parent">
          <CircularProgress />
        </div>
      )}
        <Toaster position="top-right"/>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/faq" element={<FAQs />} />
          <Route path="/doubts" element={<Doubts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
