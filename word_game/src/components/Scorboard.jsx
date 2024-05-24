import React, { useState } from 'react'
import styles from "./scorboard.module.css"


function Scorboard({score,clickCount}) {

  return (
    <div className={styles.scoreboard}><button type="button" class="btn btn-light" style={{ visibility: clickCount !== 0 ? 'visible' : 'hidden' }}>SCORE:{score}</button></div>
  )
}

export default Scorboard