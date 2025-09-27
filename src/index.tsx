import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import UserProfile from './UserProfile';

const container = document.getElementById('root');
if (container) {
  console.log('Rendering auth-app routes');
  const root = createRoot(container);
  root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Welcome to Auth App</div>} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/profile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
} else {
  console.error('Root container not found');
}