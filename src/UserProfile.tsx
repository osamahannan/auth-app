import React, { useState, useEffect } from 'react';
import './styles.css';

const UserProfile: React.FC = () => {
  const [userInfo, setUserInfo] = useState<{ username: string; role: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setUserInfo({ username: 'Demo User', role: 'admin' });
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleLogout = () => {
    window.dispatchEvent(new CustomEvent('userLoggedOut'));
  };

  if (isLoading) {
    return (
      <div className="auth-container">
        <div className="loading">
          <div className="loading-spinner"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <div className="profile-container">
        <div className="auth-card profile-card">
          <div className="profile-header">
            <div className="profile-avatar">
              {userInfo?.username.charAt(0).toUpperCase() || 'U'}
            </div>
            <h1 className="profile-name">{userInfo?.username || 'User'}</h1>
            <span className="profile-role">{userInfo?.role || 'user'}</span>
          </div>

          <div className="profile-info">
            <div className="info-card">
              <h3 className="info-title">Account Information</h3>
              <div style={{ display: 'grid', gap: '1rem' }}>
                <div className='info-row'>
                  <strong>Username:</strong>
                  <div className="info-value">{userInfo?.username || 'N/A'}</div>
                </div>
                <div className='info-row'>
                  <strong>Role:</strong>
                  <div className="info-value">{userInfo?.role || 'N/A'}</div>
                </div>
                <div className='info-row'>
                  <strong>Member Since:</strong>
                  <div className="info-value">January 2024</div>
                </div>
                <div className='info-row'>
                  <strong>Last Login:</strong>
                  <div className="info-value">Just now</div>
                </div>
              </div>
            </div>

            <div className="info-card">
              <h3 className="info-title">Permissions</h3>
              <div className="info-value">
                {userInfo?.role === 'admin' ? (
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li>✅ Full system access</li>
                    <li>✅ User management</li>
                    <li>✅ Reporting dashboard</li>
                    <li>✅ Booking management</li>
                  </ul>
                ) : (
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li>✅ View bookings</li>
                    <li>✅ Create bookings</li>
                    <li>❌ User management</li>
                    <li>❌ Reporting dashboard</li>
                  </ul>
                )}
              </div>
            </div>
          </div>

          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;