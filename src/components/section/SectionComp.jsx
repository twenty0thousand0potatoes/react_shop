import React from 'react';
import './sectionComp.css';
import { Link } from 'react-router-dom'

export default function SectionComp(props) {

  function funPrice(e) {
    props.setStateOrder(Number(e.target.id.substring(12, 13)))
  }

  const LinkParam = 'Health-Dish';

  return (
    <div className='wrapperComp' key={'sectionBlock' + props.number} >
      <div className='pictureProduct'>
        <img src={props.info.pictureUrl} alt='picture' className='imgProduct' />
      </div>
      <div className='textProduct'>
        <h3>{props.info.name}</h3>
      </div>
      <div className='addToCart'  onClick={funPrice} id={'sectionBlock' + props.number}>
      </div>
      <div className='rating'>
        <div className='imgRatin'></div>
        <h4>{props.info.rating}</h4>
      </div>
      <div className='priceAndAddBtn'>
        <h2>&#36; {props.info.price}</h2>
        <Link to={`/menu/${LinkParam}`}>
          <button type='button' >&#10006;</button>
        </Link>
      </div>
    </div>
  );
}
