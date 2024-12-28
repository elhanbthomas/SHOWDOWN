import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Route,createBrowserRouter,createRoutesFromElements,BrowserRouter,RouterProvider } from "react-router";

import Report from './components/statistics/report'
import States from './components/statistics/state'
import Stats from './components/statistics/stats'
import App from './App.jsx'
import Heart from './components/organs/heart'
import Donor_home from './components/register_donor_home/donor_home'
import Approved_hospital from './components/approved_hospital/app_hosp'


const router=createBrowserRouter(

createRoutesFromElements(

<Route path='/' element={<App/>}>

  </Route>

)


)



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}/>
  </StrictMode>,
)
