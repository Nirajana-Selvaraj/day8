import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignUpForm from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Specific routes */}
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Redirect only the root path `/` to `/signup` */}
        <Route path="/" element={<Navigate to="/signup" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
