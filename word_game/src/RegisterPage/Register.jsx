import React, { useContext, useState,useEffect } from 'react';
import UserContext from '../context/UserContext';
import styles from "./register.module.css"
import { Link } from 'react-router-dom';
import TRAİN from './deneme';

function Register() {
    const { user2, setUser2 } = useContext(UserContext);
   
    const [user, setUser] = useState({ name: "", password: "" });

    useEffect(() => {
        if (user2) {
            localStorage.setItem("user", JSON.stringify(user2));
        }
      
    }, [user2]);

    const OnChangeInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setUser2([...user2, user]); // Mevcut kullanıcıları kopyala ve yeni kullanıcıyı ekle
    }
    const click=()=>{
        setUser2([...user2, user]);
        console.log(user);
    }

    return (
        <div className={styles.register}>
            
           <form>
            <div>
                <h2>CREATE AN ACCOUNT</h2>
            </div>
          <div >
          <label htmlFor="name">Name</label>
          <input className={styles.input} onChange={OnChangeInput} name='name' type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
          </div>
          
          <div>
            <label htmlFor="password">Password</label>
            <input className={styles.input} onChange={OnChangeInput} name='password' type="password" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping"/>
          </div>
     

          <button  onClick={()=>click()} className={styles.button2} type="button" class="btn btn-outline-primary">SUBMİT</button>
          <h2 align="center" class="or">
            OR
          </h2>
          <p>
         Have an account <Link to="/login">Login?</Link>
        </p>
        </form>
        <TRAİN/>
        
       
            
        </div>
    );
}

export default Register;
