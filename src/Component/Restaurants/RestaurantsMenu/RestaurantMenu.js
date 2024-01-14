import React from 'react'
import {useParams} from 'react-router-dom'
import RestaurantList from './../RestaurantList.json';


const RestaurantMenu = () => {
  const params = useParams();

  console.log(params);
  return (
    <div>
      <h1>This is retsutant visit menu page</h1>
      {RestaurantList.map((item)=>{
        if(item.name == params.id){
          return <h1>{item.name}</h1>
        }
      })}
    </div>
  )
}

export default RestaurantMenu
