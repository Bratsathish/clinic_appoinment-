// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import CalendarView from './components/CalendarView';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={!loggedIn ? <Login setLoggedIn={setLoggedIn} /> : <Navigate to="/calendar" />} />
        <Route path="/calendar" element={loggedIn ? <CalendarView /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
