import React from 'react';
import './body.css';
import Card from './../Card/Card';
import cardData from './data.json';

const Body = () => {
  return (
    <div className='body_Container' >
      {cardData.map((item)=>{
        return <Card title={item.title} subtitle={item.subtitle} color={item.color}/>
      })}
    </div>
  )
}

export default Body
