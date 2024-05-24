import React,{useContext} from 'react'

import UserContext from '../context/UserContext';
function TRAİN() {
    const {user2}=useContext(UserContext);
  return (
    <div>
        <ul>
            {user2.map((user)=>{
               return <li>{user.name}</li>
            })}
        </ul>
    </div>
  )
}

export default TRAİN