Auth App (Micro-Frontend)
This repository contains the Auth micro-frontend for the pluggable micro-frontend architecture. It exposes Login and UserProfile components via Webpack Module Federation, integrated into the host app dynamically.
Setup Instructions

Clone the repository:
git clone <repository-url>
cd auth-app


Install dependencies:
npm install


Start the development server:
npm start

The app runs on http://localhost:3001. Test independently or via the host app (http://localhost:3000).


Architecture Decisions

Module Federation: Exposes Login and UserProfile components, accessible via remoteEntry.js.
CORS: Dev server includes Access-Control-Allow-Origin: * for cross-origin loading by the host.
TypeScript: Uses .tsx for files with JSX (e.g., index.tsx, Login.tsx). Ensures type safety for components and shared dependencies.
React 18: Uses createRoot for rendering (in index.tsx).
Minimal Dependencies: Shares React, ReactDOM, and react-router-dom as singletons with the host.

Communication Design

User State: The Login component dispatches a userLoggedIn custom event with { username, role } to share user state with the host and other micro-frontends.
Event-Based: Uses window.dispatchEvent for simplicity, avoiding complex state management libraries.

Demo Instructions

Local Demo:

Run npm start to start the auth app on http://localhost:3001.
Access via the host app (http://localhost:3000/auth/login) or directly for testing.
Login sets the user role (e.g., 'admin') for role-based access.


Deployed Demo:

Deploy to Vercel: vercel --prod.
Update the host's config.json with the deployed URL (e.g., https://auth-app.vercel.app/remoteEntry.js).
Verify integration via the deployed host app.
