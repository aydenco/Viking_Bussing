// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'
// import { Auth0Provider } from '@auth0/auth0-react'

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//   <Auth0Provider
//     domain="dev-pgl6yvi7new4jmdu.us.auth0.com"
//     clientId="xQ6gFcPawjDlJ6ckOyMkikY6PFf5CdNc"
//     authorizationParams={{
//       redirect_uri: window.location.origin
//     }}
//   >
//     <App />
//   </Auth0Provider>
//   </React.StrictMode>,
// )

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

