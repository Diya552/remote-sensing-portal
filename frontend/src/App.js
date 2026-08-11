import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import MapViewer from './components/MapViewer';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/map" element={<MapViewer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
