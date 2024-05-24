import React from 'react'
import { MdMessage } from "react-icons/md";
import styles from "./button.module.css";

function Button(props) {
    const{isOutline,icon,text}=props;
  return (
    <button className={props.isOutline ?styles.outline_btn  :styles.primary_btn}>
        {icon}
        {text}
    </button>
  )
}

export default Button