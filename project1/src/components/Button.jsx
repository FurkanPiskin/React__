import React,{useState} from 'react'
import  styles from "./button.module.css";
function Button({ setBackgroundColor }) {
  const handleRedClick = () => {
    setBackgroundColor('red');
  };

  const handleBlueClick = () => {
    setBackgroundColor('blue');
  };
  const handleWhiteClick=()=>{
    setBackgroundColor('white')
  }
  return (
    <div className={styles.buttons2}>
      <button onClick={handleRedClick}>RED</button>
      <button onClick={handleBlueClick}>BLUE</button>
      <button onClick={handleWhiteClick}>WHİTE</button>
    </div>
  );
}

export default Button;
