import React,{useContext}from 'react';
import '../static/credentialForm.css';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/context';

function CredentialForm({disableAll,disable,purpose,saveBtn='true',destination}) {

  const navigate=useNavigate()
  const {newUser,oldUser}=useContext(UserContext)
  let user=newUser||oldUser

  let handleSubmit=()=>{
    // console.log(newUser.email)
    navigate(`/${destination}`)
  }

  return (
    <div className="credential-form-container">
      <h1>{purpose?purpose:""}</h1>
      <form onSubmit={handleSubmit} className="credential-form">
        <label htmlFor="name">Name :</label>
        <input type="text" name="name" className="form-input" disabled={disableAll} />
        <br /><br />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" defaultValue={user?user.email:""} className="form-input" disabled={disable} />
        <br /><br />
        <label htmlFor="tel">Mobile number</label>
        <input type="tel" name="tel" className="form-input" disabled={disableAll} />
        <br /><br />
        <label htmlFor="bloodGroup">Blood Group</label>
        <input type="text" name="bloodGroup" disabled={disableAll} className="form-input" />
        <br /><br />

        <label htmlFor="organ">Select Organ Required :</label>
        <select name="organ" className="form-input" disabled={disableAll}>
          <option value="" disabled selected></option>
          <option value="lungs">Lungs</option>
          <option value="kidney">Kidney</option>
          <option value="heart">Heart</option>
          <option value="liver">Liver</option>
          <option value="cornea">Cornea</option>
        </select>
        <br /><br />

        <p>Address</p>
        <br />
        <label htmlFor="line1">Address Line 1</label>
        <input type="text" name="line1" disabled={disableAll} className="form-input" />
        <br /><br />
        <label htmlFor="line2">Address Line 2</label>
        <input type="text" name="line2" disabled={disableAll} className="form-input" />
        <br /><br />
        <label htmlFor="city">City</label>
        <input type="text" name="city" disabled={disableAll} className="form-input" />
        <br /><br />
        <label htmlFor="state">State</label>
        <input type="text" name="state" disabled={disableAll} className="form-input" />
        <br /><br />
        <label htmlFor="pin">Pin code</label>
        <input type="text" name="pin" disabled={disableAll} className="form-input" />
        <br /><br /><br />
       { saveBtn?<button className="form-button">Save</button>:""}
      </form>
    </div>
  );
}

export default CredentialForm;
