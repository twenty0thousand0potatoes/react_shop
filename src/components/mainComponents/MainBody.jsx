import React from 'react';
import './mainBody.css';
import Advertisementv from './Advertisementv';
import { Link } from 'react-router-dom';

export default function MainBody() {
    return (
        <div className='mainWrapper'>
            <div className='mainText'>
                <h1>the faster delivery <span className='noneDecor'>in</span><br/> <span className='colorText'>your city</span></h1>
                <h4 className='loremText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat iusto a nam esse eius, incidunt sapiente magni quia perspiciatis alias sed, blanditiis hic. Doloribus, ab nulla ratione maiores sed veniam!</h4>
            <div className='buttons'>
                <Link to = '/menu'>
                <button type = 'button' className='orderNow both'>order now</button>
                </Link>
            </div>
            </div>
            <div className='imgPlant'></div>
            <Advertisementv/>
            <div className='decorBack'></div>
        </div>
    );
}
