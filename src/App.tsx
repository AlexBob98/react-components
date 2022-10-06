import AboutPage from 'pages/About';
import HomePage from 'pages/Home';
import NotFoundPage from 'pages/NotFound';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </>
  );
}

export default App;
