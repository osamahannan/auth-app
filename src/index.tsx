import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import UserProfile from './UserProfile';
import { ModuleMetadata } from './shared-types'; // Adjust path if shared

// Dispatch metadata on load
const registerModule = () => {
  const metadata: ModuleMetadata = {
    name: 'auth',
    url: window.location.origin + '/remoteEntry.js', // Dynamic URL for local/production
    components: ['Login', 'UserProfile'],
    routes: ['/auth/login', '/auth/profile'],
    permissions: [],
  };
  window.dispatchEvent(new CustomEvent('moduleRegister', { detail: metadata }));
  console.log('Dispatched moduleRegister for auth-app:', metadata);
};

// Register on app init
registerModule();

const container = document.getElementById('root');
if (container) {
  console.log('Rendering auth-app routes');
  const root = createRoot(container);
  root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/auth/login" />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/profile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
} else {
  console.error('Root container not found');
}