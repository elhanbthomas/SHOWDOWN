import React from 'react'
import CredentialForm from './credentialForm'
import '../static/afterEntryPage.css'
import Sidebar from './Sidebar'

function EditDetails() {
  return (
    <div>
        <Sidebar/>
      <CredentialForm purpose="Edit your Details and then save" destination="afterEntryPage" />
    </div>
  )
}

export default EditDetails
