import React from 'react';
import './serviceMain.css';
import DefaultComp from './DefaultComp.jsx';
import ActiveOrders from './ActiveOrders.jsx';
import PAssiveOrdes from './PAssiveOrdes.jsx';

export default function ServiceMain(props) {
  console.log(props.kol)
  return (
    <div className='servicePaddingHeader'>
    <DefaultComp orderInfo={props.orderInfo} kol = {props.kol}/>
    <ActiveOrders/>
    <PAssiveOrdes/>
    </div>
  );
}
