// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h1>Auth App</h1>
        <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
