Auth App
The Auth App is a micro-frontend in a Webpack Module Federation architecture, providing authentication and user profile management using React and TypeScript.
Repository

GitHub: https://github.com/osamahannan/auth-app

Features

Authentication: Exposes Login and UserProfile components for user authentication and profile management.
Self-Registration: Registers with the host via the moduleRegister event, providing metadata for public routes (/auth/login, /auth/profile).
Role-Based Access: Routes are public (no permissions required), accessible to all users.
Netlify Deployment: Independently deployed with CORS headers for remoteEntry.js.

Setup

Clone the Repository:git clone https://github.com/osamahannan/auth-app.git
cd auth-app


Install Dependencies:npm install


Run Locally:npm start


Opens at http://localhost:3001.
Test standalone routes: http://localhost:3001/auth/login, http://localhost:3001/auth/profile.


Build for Production:npm run build


Outputs to dist/.


Deploy to Netlify:npm run deploy


Deploys to https://micro-auth-app.netlify.app.



Architecture Decisions

Webpack Module Federation: Exposes Login and UserProfile via remoteEntry.js, consumed by the host app for dynamic loading.
TypeScript: Ensures type safety for components and shared ModuleMetadata interface.
React with react-router-dom: Handles standalone routing for testing (/auth/login, /auth/profile).
SPA Routing: Configured historyApiFallback in webpack.config.js for local SPA routing and netlify.toml for production.
Public Routes: No permissions required, ensuring accessibility for all users, including unauthenticated ones.

Communication Design

Self-Registration: Dispatches moduleRegister event in index.tsx with metadata (name: auth, routes, components, permissions: [], URL).
Authentication Events: Login component dispatches userLoggedIn with username and role (user or admin). UserProfile dispatches userLoggedOut on logout.
Shared Dependencies: Shares react, react-dom, react-router-dom as singletons with the host to ensure consistency and reduce bundle size.
CORS: netlify.toml sets Access-Control-Allow-Origin: * for remoteEntry.js access by the host.

Testing

Local: Run npm start and test http://localhost:3001/auth/login. Verify userLoggedIn event in the host (http://localhost:3000/auth/login).
Production: Test at https://micro-auth-app.netlify.app/auth/login and in the host at https://micro-host-app.netlify.app/auth/login.
Self-Registration: Check console for Dispatched moduleRegister for auth-app log and host registration.
