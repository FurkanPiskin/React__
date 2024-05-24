import React from 'react'
import BannerImage from '../Images/2blackbean.jpg'

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{backgroundImage: `url(${BannerImage})`}} ></div>
        <div className='rightSide'>
            <h1> Contact us</h1>
            <form id='contact-form'>
                <label htmlFor='name'>Full Name</label>
                <input name='name' placeholder='Enter Full Name...' type='text' ></input>
                <label htmlFor='email'>email</label>
                <input name='mail' placeholder='Enter an Email...' type='email' ></input>
                <label htmlFor='message'>Message</label>
                <input name='message' placeholder='Enter Your Message' type='text' ></input>
                <textarea name='message' placeholder='Enter your message'></textarea>
                 <button type='submit'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact