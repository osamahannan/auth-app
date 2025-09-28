import React, { useState } from 'react';
import './styles.css';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    setError('');

    setTimeout(() => {
      if (password === 'admin') {
        window.dispatchEvent(new CustomEvent('userLoggedIn', { 
          detail: { username, role: 'admin' } 
        }));
        // Redirect to home page after successful login
        setTimeout(() => {
          window.location.href = '/';
        }, 500);
      } else if (password === 'user') {
        window.dispatchEvent(new CustomEvent('userLoggedIn', { 
          detail: { username, role: 'user' } 
        }));
        // Redirect to home page after successful login
        setTimeout(() => {
          window.location.href = '/';
        }, 500);
      } else {
        setError('Invalid password. Try admin or user');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <span className="auth-icon">🔐</span>
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">Sign in to your account</p>
        </div>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
          <div className="form-group">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            className="auth-button"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className="loading-spinner" style={{ display: 'inline-block', margin: '0 auto' }}></div>
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        <div className="auth-links">
          <p style={{ color: '#6b7280', fontSize: '0.8rem', marginTop: '1rem' }}>
            Demo credentials: admin or user
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;