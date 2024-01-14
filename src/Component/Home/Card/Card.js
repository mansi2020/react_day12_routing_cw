import React, { useEffect } from 'react'
import Button  from '../../Button/Button'
import './card.css'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Card = () => {
  useEffect(()=>{
    Aos.init({duration:500});
  },[]);
  return (
    <div className="descriptionSection">
      <img src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt=""  data-aos="flip-up"/>
      <div>
        <div className="descriptionContent">
            <h1>Time to prepare for the holidays (yes, now!)</h1>
            <p>We are here to help your restaurant get ready for the upcoming season and crush your revenue goals these next few months.
            Customize ordering options, from sizes to colors and more Easily fulfill orders and shipping.Use add-ons like promo codes to encourage more sales.
            </p>
            <Button buttonText="Get in Touch" id="descriptionButton" ></Button>
        </div>
      </div>
    </div>
  )
}

export default Card;
