import styles from "./home.module.css"
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppCard from "./Cards";


function Home() {
    
  return (
  <div className={styles.home}> 
    
    



   <div className={styles.cards}>
   <AppCard title="Calculator" to='/calculator'/>
   <AppCard title="Algorithms" to='/algorithms'/>
   <AppCard title="toDoList" to='/DoList'/>
   </div>
   

 

 
  
  
    

  </div>
  )
}

export default Home