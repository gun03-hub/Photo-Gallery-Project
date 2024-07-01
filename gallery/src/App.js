import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Gallery from './Gallery';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import { AuthProvider } from './AuthContext';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <header>
          <h1 className="app-header">Photo Gallery</h1>
          <p className="app-subheading">by: Gunjan Arora</p>
        </header>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/gallery" element={<Gallery />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
