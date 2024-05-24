import React, { useState } from 'react'
import { words } from '../components/WordList'
import styles from "./wordgame.module.css"
import Guess from '../components/Guess';

function Wordgame() {
    const buttons=[];
    const wordlength=words[0].word.length;
    for( let i=0;i<wordlength;i++){
       buttons.push(<button key={i}>a</button>) 
    }
  return (
    <div className={styles.App}>
       
        <div className={styles.Tahmin}>
    <Guess />
    
    </div>

    </div>
  )
}

export default Wordgame