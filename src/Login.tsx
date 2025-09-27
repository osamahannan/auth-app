import React, { useState } from 'react';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const handleLogin = () => {
    window.dispatchEvent(new CustomEvent('userLoggedIn', { detail: { username, role: 'admin' } }));
  };

  return (
    <div>
      <h2>Login</h2>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;