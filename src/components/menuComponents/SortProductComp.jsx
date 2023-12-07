import React from 'react';
import './pizzaComponentMain.css'


export default function SrtProductComp(props) {


function funSort(e){
  props.sortFunClick(e.target.value)
}

  return (
    <div className='sortPropductBlock' id = {props.index} onClick = {funSort}>
    <h3  >Sort:</h3><button className='sortProduct' value = 'cheaper'>more cheaper &darr; </button><button className='sortProduct' value = 'expensive'> more expensive &uarr;</button>
</div>
  );
}
