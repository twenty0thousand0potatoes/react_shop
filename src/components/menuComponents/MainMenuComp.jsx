import React, { useState } from 'react';
import './mainMenuComp.css'
import Product from './Product';
import { useParams } from 'react-router-dom';

export default function MainMenuComp(props) {
  const { id } = useParams();
  return (
    <div>
      <Product scrollBlockId={id}  searchNameProduct = {props.searchNameProduct} setState = {props.setState}/>
    </div>
  );
}
