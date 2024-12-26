import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Report from './components/statistics/report'
import States from './components/statistics/state'
import Stats from './components/statistics/stats'
import App from './App.jsx'
import Heart from './components/organs/heart'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Heart/>
  </StrictMode>,
)
