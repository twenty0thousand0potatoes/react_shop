import React from 'react';
import './cardAdvetrisement.css';
import { Link } from 'react-router-dom';
import * as additionalFunction from '../additionalFunction.js'

export default function CardsAdvertisement(props) {

    return (
        <div className='blur'>
            <div className='cards' key={props.number}>
                <div className='card'>
                    <img src={props.info.class} alt='picture' className='imgLogo' />
                    <div className='textBlock'>
                        <h2 className='LogoName'>{props.info.name}</h2>
                        <p className='secondNameLogo'>{props.info.secondName}</p>
                        <p className=' price'> to &#36; {props.info.price}</p>
                    </div>
                    <div className='slaiderButtons'>
                        <Link to={`/menu/${props.info.name}`}>
                            <button type='button' className='slaiderBtn first' value={props.info.name} >Order Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
