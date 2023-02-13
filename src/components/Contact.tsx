import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/Bs";
import {MdEmail} from "react-icons/Md"
import {BsChatRightTextFill} from "react-icons/Bs"
import './Contact.css'
export default function Contact() {
  return (
    <div className="contact">
        
    <form>
        <div className='title'>
            <h1>Contact us</h1>
        </div>
        <br />
        <div className="row">  
        
            <div className="input-group">
            <input type="text" id="name" required />
            <label htmlFor="name"><FaUserAlt/> Your name</label>
         </div>
         <div className="input-group">
            <input type="text" id="number" required />
            <label htmlFor="number" ><BsTelephoneFill/> Phone number</label>
         </div>
        </div>
         <div className="input-group">
            <input type="email" id="email" required />
            <label htmlFor="email"><MdEmail/> Your Email</label>
         </div>
         <div className="input-group">
            <textarea id="message" rows={8} required></textarea>
            <label className='z8' htmlFor='message'><BsChatRightTextFill/> Your Message</label>
         </div>
         <button type="submit" id="btn1"> SEND</button>
    </form>
    </div>
  )
}
