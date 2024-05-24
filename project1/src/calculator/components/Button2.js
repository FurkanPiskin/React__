import React from 'react'
import styles from './Button.module.css';

function Button2({symbol,color,handleClick}) {
  return (
    <div 
    onClick={()=>handleClick(symbol)} 
    className={styles.buttonwrapper} style={{backgroundColor:color}}>
        <button>{symbol}</button>
    </div>
  )
}

export default Button2