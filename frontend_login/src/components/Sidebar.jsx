import React,{useState,useContext} from 'react'
import '../static/Sidebar.css'
import  {SidebarData}  from './SidebarData.jsx';
// import LogoutButton from './logoutButton';
import { NavLink ,useNavigate} from 'react-router-dom';
import UserContext from '../context/context.jsx';

function Sidebar() {

    const [isOpen,setIsOpen]=useState(true);
    const {setOldUser}=useContext(UserContext);
    const navigate=useNavigate();
    
    const toggleSidebar=()=>{
        console.log("before toggle: ",isOpen)
        setIsOpen(!isOpen)
        console.log('after toggle: ',isOpen)
    }

    const handleLogout=()=>{
        setOldUser(null);
        navigate('/')
    }

  return (
    <div className={`sidebar ${isOpen?'open':'closed'}`}>
        <div className="sidebar-header">
            <button className='toggle-btn' onClick={toggleSidebar}>
                <div className={`arrow  ${isOpen ? 'left':'right'}`}></div>
            </button>
            <div className='logo'>
                <h2>{isOpen?'My App':""}</h2>
            </div>
        </div>

        <nav className='nav-menu'>
            <ul>
                {SidebarData?.map((item,index)=>(
                    <>
                    <li key={index}>
                        <NavLink to={item.path} className={({isActive})=>isActive?'active':""}>
                            {item.icon}
                            {isOpen? item.title:" "}
                        </NavLink>
                    </li>
                    <hr />
                    </>
                ))}
            </ul>
        </nav>
        <div className={`logout-btn ${isOpen?'open':'closed'}`}>
        <button id='logout-btn-comp' style={{color:"white",padding:"10px",borderRadius:'10%' }}  onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}

export default Sidebar
