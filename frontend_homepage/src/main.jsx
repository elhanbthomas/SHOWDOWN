import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Report from './components/statistics/report'
import States from './components/statistics/state'
import Stats from './components/statistics/stats'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
