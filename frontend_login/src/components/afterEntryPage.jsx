import React,{useContext} from 'react'
import UserContext from '../context/context'
// import LogoutButton from './logoutButton'
import Sidebar from './Sidebar'
import '../static/afterEntryPage.css'
import CredentialForm from './credentialForm'

function AfterEntryPage() {
const {oldUser}=useContext(UserContext)
const user=oldUser
  return (
    <div id='content'>
      <Sidebar/>
      <CredentialForm disableAll={true} disable={true} saveBtn={false} purpose="Welcome to Organ Donation App"/>
    </div>
  )
}

export default AfterEntryPage
