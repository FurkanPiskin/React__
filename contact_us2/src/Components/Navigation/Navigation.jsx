import React from 'react'
import styles from "./navigation.module.css"

function Navigation() {
  return (
    <nav className={styles.container}>
        <div className='logo'>
            <img src="https://as2.ftcdn.net/v2/jpg/02/35/60/77/1000_F_235607708_ZJwajVKTBPxbhBEVk3vRO9VRuMz5lQwA.jpg" 
            alt="coding logo" />
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            
        </ul>
    </nav>
  )
}

export default Navigation