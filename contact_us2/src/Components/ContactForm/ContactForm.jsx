import React from 'react'
import styles from "./contactform.module.css";
import { MdMessage } from "react-icons/md";
import Button from '../Button/Button';

function ContactForm() {
  return (
    <section className={styles.container}>
       
    <div className={styles.contactform}>
        <div className={styles.top_btn}>
        <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
        <Button text="VIA CALL"  icon={<MdMessage fontSize="24px"/>}/>
        </div>
        <div className={styles.outline_btn}>
        <Button isOutline={true} text="VIA EMAİL"  icon={<MdMessage fontSize="24px"/>}/>
        <form>
            <div className={styles.form_control}>
            <label htmlFor="name">Name:</label>
            <input type="text" name='name'/>

            <div className={styles.form_control}>
            <label htmlFor="name">Email:</label>
            <input type="text" name='email'/>
            </div>

            <div className={styles.form_control}>
            <label htmlFor="name">Text:</label>
            <textarea type="text" name='text'/>
            </div>
            </div>
            <div className={styles.submit_btn}>
            <Button isOutline={false} text="SUBMİT"  icon={<MdMessage fontSize="24px"/>}/>
            </div>
      
      

        </form>
        </div>
    </div>
    
    <div className={styles.contactimage}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpfws9KMXKDZShDJQJsfgLBicsIYwpWAylCHA-kxIMaA&s" 
      alt="" />
    </div>

    </section>
  )
}

export default ContactForm