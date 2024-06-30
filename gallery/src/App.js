import React from 'react';
import './App.css';
import Gallery from './Gallery';

function App() {
  return (
    <>
      <header>
        <h1 className="app-header">Photo Gallery</h1>
        <p className="app-subheading">by: Gunjan Arora</p>
      </header>
      <Gallery />
    </>
  );
}

export default App;