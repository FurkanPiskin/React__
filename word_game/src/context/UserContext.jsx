import React from 'react'
import { createContext,useState } from 'react'
import Login from '../LoginPage/Login';

const UserContext=createContext();
export const UserProvider=({children})=>{
    const[user2,setUser2]=useState([]);
     

    const values = {
        user2, 
        setUser2 
    };
    return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}
export default UserContext;
