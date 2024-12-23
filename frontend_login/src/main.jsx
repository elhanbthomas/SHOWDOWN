import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { UserProvider } from './context/context.jsx'

const clientId = "";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <GoogleOAuthProvider clientId={clientId}>
        <App />
      </GoogleOAuthProvider>  
    </UserProvider>
  </StrictMode>
)
