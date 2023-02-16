import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/Bs";
import {MdEmail} from "react-icons/Md"
import {BsChatRightTextFill} from "react-icons/Bs"
import {MdSubtitles} from "react-icons/Md"
import './Contact.css'
import Nav from './Nav';
export default function Contact() {
  return (<> <Nav/> 
    <div className="contact">
        
    <form>
        <div className='title'>
            <h1>Contact us</h1>
        </div>
        <br />
        <div className="row">  
        
            <div className="input-group">
            <input type="text" id="name" required />
            <label id='lb' htmlFor="name"><FaUserAlt/> Your name</label>
         </div>
         <div className="input-group">
            <input type="text" id="number" required />
            <label id='lb' htmlFor="number" ><BsTelephoneFill/> Phone number</label>
         </div>
        </div>
         <div className="input-group">
            <input type="email" id="email" required />
            <label id='lb' htmlFor="email"><MdEmail/> Your Email</label>
         </div>
         <div className="input-group">
            <input type="text" id="subject" required />
            <label id='lb' htmlFor="subject"><MdSubtitles/> Subject</label>
         </div>
         <div className="input-group">
            <textarea id="message" rows={8} required></textarea>
            <label id='lb' className='z8' htmlFor='message'><BsChatRightTextFill/> Your Message</label>
         </div>
         <button type="submit" id="btn1"> SEND</button>
    </form>
    </div></> 
  )
}
