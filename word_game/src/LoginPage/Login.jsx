import React, {  useState, useContext } from 'react';
import styles from './login.module.css';
import UserContext from '../context/UserContext';
import { Link } from 'react-router-dom';

function Login() {
   const {user2}=useContext(UserContext);
   
   const [log,setlog]=useState("");

   const isExist=(value)=>{
let isFound=false;
{user2.map((user)=>{
    if(user.name===value ){
        isFound=true;
    }
})}
if(isFound===true){
    alert("başarili");
}
else{
    alert("Başarisiz");
}
   }
    return (
        <div className={styles.register}>
           <form >
            <div>
                <h2>LOGİN PAGE</h2>
            </div>
          <div >
          <label htmlFor="name">Name</label>
          <input onChange={(e)=>setlog(e.target.value)} name='name' className={styles.input} type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
          </div>
          
          <div>
            <label htmlFor="password">Password</label>
            <input  onChange={(e)=>setlog(e.target.value)} name='password' className={styles.input} type="password" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping"/>
          </div>
     

          <button onClick={()=>isExist(log)} className={styles.button2} type="button" class="btn btn-outline-primary">LOGIN</button>
         
          <p>
           
         Have an account <Link to="/login">SIGN IN?</Link>
   
        </p>
        </form>
        <ul>
            {user2.map((user,i)=>{
               return <li key={i}>{user.name}</li>
            })}
        </ul>
       
            
        </div>
    );
}

export default Login;
