import { useState } from 'react'
import './App.css'
import Home from './components/Home.jsx'
import SignUp from './components/signUp.jsx'
import Login from './components/login.jsx'
import AfterEntryPage from './components/afterEntryPage.jsx'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import IndividualDetails from './components/IndividualDetails.jsx'
import EditDetails from './components/EditDetails.jsx'
import WaitingList from './components/waitingList.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signUp' element={<SignUp/>}/>
          <Route path='/afterEntryPage' element={<AfterEntryPage/>}/>
          <Route path='/individualDetails' element={<IndividualDetails/>}/>
          <Route path='/EditDetails' element={<EditDetails/>}/>
          <Route path='/waitingList' element={<WaitingList/>} />
        </Routes> 
      </BrowserRouter>
    </>
  )
}

export default App
