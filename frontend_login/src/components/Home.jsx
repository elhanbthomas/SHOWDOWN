import React from 'react'
import '../static/home.css'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate=useNavigate()
  return (
    <div>
      <button className='login-signup-btn' onClick={()=>navigate('/login')}>login</button>
      <button className='login-signup-btn' onClick={()=>navigate('/signUp')}>Sign up</button>
    </div>
  )
}

export default Home
