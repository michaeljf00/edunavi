import React, { useState } from "react";
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Login } from "./Login";
import { Register } from "./Register";
import { Home } from "./Home"

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  console.log(currentPage);

  return (
    <div className="App"> 
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
      { currentPage === "login" ? <Login /> : <Home />}
    </div>
  );
}

export default App;