import React from 'react'
import {Home,PhoneInTalk,Email} from "@mui/icons-material";
import './Contact.css'

const ContactInfo = () => {
  return (
    <div className='contactinfo_container'>
      <div className="contactinfo_details">
        <p>Conatct Us</p>
        <h1>GET IN TOUCH WITH US</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim veniam quis nostrud exercitation ullamco</p>
        <div className="contactinfo_iconsdeatails">
            <div className="conatctinfo_card">
                <Home  style={{fontSize: "40px",marginRight:"2rem"}}/>
                <div className="contactinfo_card_data">
                    <h1>Our Location</h1>
                    <p>99 S.t Jomblo Park Pekanbaru 28292.<br/> Indonesia</p>
                </div>
            </div>
            <div className="conatctinfo_card">
            <PhoneInTalk style={{fontSize: "40px",marginRight:"2rem"}}/>
                <div className="contactinfo_card_data">
                    <h1>Phone Number</h1>
                    <p>(+62)81 414 257 9980</p>
                </div>
            </div>
            <div className="conatctinfo_card">
            <Email style={{fontSize: "40px",marginRight:"2rem"}}/>
                <div className="contactinfo_card_data">
                    <h1>Email Address</h1>
                    <p>info@yourdomain.com</p>
                </div>
            </div>
        </div>
      </div>
      <div className="contactinfo_form">
        <input type="text" placeholder='Your Name'/>
        <input type="text" placeholder='Your Email'/>
        <input type="text" placeholder='Your Phone'/>
        <textarea type="text" placeholder='Your Message'/>
        <button>Submit</button>
      </div>
    </div>      
  )
}

export default ContactInfo
