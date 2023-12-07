
import React from 'react';
import './advertisement.css'
import CardsAdvertisement from './CardsAdvertisement';


export default function Advertisementv() {
    const defaultInfo = [
        {
            name:'Burger',
            secondName:'Mushroom Sause',
            class:'https://cdn-icons-png.flaticon.com/512/2674/2674087.png',
            price: '5.25'
        },
        {
            name:"Pizza",
            secondName:"Homemade Pizza",
            class:'https://cdn-icons-png.flaticon.com/512/2674/2674065.png',
            price:'5.25'
        },
        {
            name:'Cake',
            secondName:"Cream Cake",
            class:'https://cdn-icons-png.flaticon.com/512/2674/2674078.png',
            price:'5.25'
        },
        {
            name:"Health-Dish",
            secondName:"Chicken Salad",
            class: 'https://cdn-icons-png.flaticon.com/512/189/189143.png',
            price:'5.25',
        }
    ];

  return (
    <div className='wrapperAdvertisement'>
        {defaultInfo.map((item, index)=>{
            return(
                <CardsAdvertisement info = {item} number =  {index}/>
            )
        })}

    </div>
  );
}
