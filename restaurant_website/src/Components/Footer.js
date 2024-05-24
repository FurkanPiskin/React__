import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <p> &copy;2022 burger33.com</p>
            <FaFacebook ></FaFacebook>
            <FaInstagram></FaInstagram>
            <FaTwitter></FaTwitter>
           
        </div>
    </div>
  )
}

export default Footer