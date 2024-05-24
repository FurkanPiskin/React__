import React from 'react'
import styles from "./questions.module.css"

function Questions({question}) {
  return (
    <div className={styles.questions}><h3>{question}</h3></div>
  )
}

export default Questions