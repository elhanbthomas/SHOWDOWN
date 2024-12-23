import React ,{ createContext,useState } from "react";

const UserContext=createContext()

export const UserProvider=(({children})=>{

    const [oldUser,setOldUser]=useState(null)
    const [newUser,setNewUser]=useState(null)

    return (
        <UserContext.Provider value={{oldUser,setOldUser,newUser,setNewUser}}>
            {children}
        </UserContext.Provider>
    )
})

export default UserContext
