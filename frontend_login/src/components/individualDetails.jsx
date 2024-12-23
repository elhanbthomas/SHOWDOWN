import React from 'react'
import CredentialForm from './credentialForm'

function IndividualDetails() {
  return (
    <div >
      <h1 style={{ color: 'black', fontSize: '2rem', marginBottom: '20px', textAlign:"center", marginTop:'10px' }}>Fill your details to register</h1>
      <CredentialForm disable={true} destination="login"/>
    </div>
  )
}

export default IndividualDetails
