import React from 'react'
import Header from './pages/components/Header'
import { Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact';
import About from './pages/About';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App