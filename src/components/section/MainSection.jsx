import React, { useState } from 'react';
import './mainSection.css'
import SectionComp from './SectionComp';

export default function MainSection(props) {

    const defaulInfoSection = [
        {
            name: 'Fresh Orandes',
            pictureUrl: 'https://cdn-icons.flaticon.com/png/512/1791/premium/1791312.png?token=exp=1655983298~hmac=39bc4cf83cc80a7be7300791360fdb6b',
            rating: '3.8',
            price: 7.56,
            id:'oranges', 
            kol:1,
            defaultPrice : 12.45
        },
        {
            name: 'Strawberry',
            pictureUrl: 'https://cdn-icons.flaticon.com/png/512/1652/premium/1652078.png?token=exp=1655986183~hmac=faa69d55c69ce8df20b6fe64e18d1e0a',
            rating: '4.7',
            price: 10.43,
            id:'strawberry', 
            kol:1,
            defaultPrice : 12.45
        },
        {
            name: 'Pomegranate',
            pictureUrl: 'https://cdn-icons.flaticon.com/png/512/3786/premium/3786231.png?token=exp=1655986367~hmac=3cb29664b2f67883abf2db3c16ef9bd4',
            rating: '3.6',
            price: 13.98,
            id:'pomegranate', 
            kol:1,
            defaultPrice : 12.45
        }
    ];

    function setStateOrderMain(number) {
        let obj = {
            nameProduct: defaulInfoSection[number].name,
            price: defaulInfoSection[number].price,
            imageURL: defaulInfoSection[number].pictureUrl,
            id: defaulInfoSection[number].id, 
            kol: defaulInfoSection[number].kol,
            defaultPrice : defaulInfoSection[number].price
        };
        props.setState(obj);
    }

    return (
        <div className='wrapperSection'>
            <div className='conteiner'>
                <div className='cardsSection'>
                    {defaulInfoSection.map((item, index) => {
                        return (
                            <SectionComp info={item} number={index} setStateOrder={setStateOrderMain} />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
