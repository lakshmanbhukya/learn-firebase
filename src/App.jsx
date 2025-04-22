import React from "react";
import Navbar from "./components/navbar.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Login from "./pages/login.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Register from "./pages/register.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />}/>
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
