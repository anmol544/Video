// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import './App.css';

function App() {
  return (
    <Router>
      <div style={{ textAlign: 'center', marginTop: '2rem', marginBottom:'2rem' }}>
        <h1 className="headApp">Academics App</h1>
        <Link to="/Pages/Login/Login"  style={{ marginRight: '1rem', color:'black',textDecoration:"none" }}>Login</Link> | <Link to="/Pages/Signup/Signup"  style={{ marginLeft: '1rem',color:'black', textDecoration:"none"  }}>Signup</Link>
        <Routes>
          <Route path="/pages/Login/Login" element={<Login />} />
          <Route path="/pages/Signup/Signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
