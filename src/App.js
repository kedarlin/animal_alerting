import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Hotspots from './pages/Hotspots/Hotspots';
import Alerts from './pages/Alerts/Alerts';
import Detection from './pages/Detection/Detection';

const App = () => {
  return ( 
    <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path='/home' element={<Home />} />
          <Route path='/hotspots' element={<Hotspots />} />
          <Route path='/alerts' element={<Alerts />} />
          <Route path='/detection' element={<Detection />} />
        </Routes>
    </Router>
  );
}

export default App;
