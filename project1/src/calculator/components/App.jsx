
import styles from'./App.module.css';


import { useState } from 'react';
import * as math from 'mathjs'
import Button2 from './Button2';
import Input2 from './Input2';

function Calc() {
 
  
  const[text,setText]=useState("");
  const[result,setResult]=useState("");
  const addToText = (val) => {
    setText((text) => [...text, val + ""]);
}
const resetInput=()=>{
  setText("");
  setResult("");
}
const calculateResult=()=>{
  const input=text.join("");
  setResult(math.evaluate(input));
}
  return (
    <div className={styles.App}>
     <div className={styles.calcwrapper}>
     <Input2 text={text} result={result}/>
    
     
      <div className={styles.row}>
      <Button2 symbol="7" handleClick={addToText}/>
      <Button2 symbol="8" handleClick={addToText}/>
      <Button2 symbol="9" handleClick={addToText}/>
      <Button2 symbol="/ "handleClick={addToText}  color="#00AD85"/>
      </div>
      <div className={styles.row}>
      <Button2 symbol="4" handleClick={addToText}/>
      <Button2 symbol="5" handleClick={addToText}/>
      <Button2 symbol="6" handleClick={addToText}/>
      <Button2 symbol="*" color="#00AD85" handleClick={addToText}/>
      </div>
      <div className={styles.row}>
      <Button2 symbol="1" handleClick={addToText}/>
      <Button2 symbol="2" handleClick={addToText}/>
      <Button2 symbol="3" handleClick={addToText}/>
      <Button2 symbol="+" color="#00AD85" handleClick={addToText}/>
      </div>
      <div className={styles.row}>
      <Button2 symbol="0" handleClick={addToText} />
      <Button2 symbol="," handleClick={addToText}/>
      <Button2 symbol="=" handleClick={calculateResult}/>
      <Button2 symbol="-" color="#00AD85" handleClick={addToText}/>
      </div>
      <Button2 symbol="Clear" color="#00AD85" handleClick={resetInput} />
     </div>
    
    </div>
  );
}

export default Calc;
