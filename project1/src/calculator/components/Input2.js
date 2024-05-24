import React from 'react'
import  styles from'./Input.module.css';

function Input2({text,result}) {
  return (
    <div className={styles.inputwrapper}>
        <div className={styles.result}>
            <h1>{result}</h1>
        </div>
        <div className={styles.text}>
            <h3>{text}</h3>
        </div>
    </div>
  )
}

export default Input2