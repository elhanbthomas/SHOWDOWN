import React,{useContext} from 'react'
import { GoogleLogin } from '@react-oauth/google'
import {jwtDecode} from "jwt-decode"
import UserContext from '../context/context'
import { useNavigate } from 'react-router-dom'

function ButtonGoogle({navigateTO}) {

    let {setOldUser,setNewUser}=useContext(UserContext) ;
    let navigate=useNavigate();

    return (
            <GoogleLogin text="continue_with"
                onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                    let decoded=jwtDecode(credentialResponse.credential)
                    console.log("Decoded data: ",decoded)
                    setOldUser(decoded);
                    setNewUser(decoded);
                    navigate(`${navigateTO}`)
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
    )
}

export default ButtonGoogle
