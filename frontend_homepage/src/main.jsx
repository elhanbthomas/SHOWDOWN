import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Route,createBrowserRouter,createRoutesFromElements,BrowserRouter,RouterProvider } from "react-router";


import Stats from './components/statistics/stats'
import App from './App.jsx'
import Heart from './components/organs/heart'
import Donor_home from './components/register_donor_home/donor_home'
import Approved_hospital from './components/approved_hospital/app_hosp'
import Layout from './components/layout';
import Kidney from './components/organs/kidney';

const router=createBrowserRouter(

createRoutesFromElements(

<Route path='/' element={<Layout/>}>
<Route path="" element={<App/>}/>
<Route path="stats" element={<Stats/>}/>
<Route path="donor" element={<Donor_home/>}/>
<Route path="app_hosp" element={<Approved_hospital/>}/>
<Route path="organ_heart" element={<Heart/>}/>
<Route path="organ_kidney" element={<Kidney/>}/>



  </Route>




)


)



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}/>
  </StrictMode>,
)
