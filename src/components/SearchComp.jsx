import React, { useState, useMemo } from 'react';
import './searchComp.css';
import { Link } from 'react-router-dom';
import * as additionalFunction from '../components/additionalFunction.js'


export default function SearchComp(props) {

  const [nameSearchProduct, setNameSearchProduct] = useState('')
  const defaultArray = additionalFunction.getProducts();
  const [searchNameProduct, setSearchNameProduct] = useState('');

  const funFind = (e) => {
    setNameSearchProduct(e.target.value);
    if (e.target.value.length === 0) {
      setSearchNameProduct('');
    }
    defaultArray.forEach((item, index) => {
      item.forEach(item2 => {
        if (item2.nameProduct.includes(nameSearchProduct) && nameSearchProduct.length > 0) {
          if (searchNameProduct !== defaultArray[index][0].sectionName) {
            setSearchNameProduct(defaultArray[index][0].sectionName);
          }
        }
      })
    })
  };

  function scroll(value) {
    document.getElementById(value).scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  const funFindProduct = () => {
    if (searchNameProduct !== '' && searchNameProduct.length > 0) {
      scroll(searchNameProduct);
    }
  }

  return (
    <div className='wrapperSearch'>
      <div className='imgSearch' onClick={funFindProduct}></div>
      <Link to='menu'><input type='text' placeholder='search' className='searchTextArea' onInput={funFind} ></input></Link>
    </div>
  );
}
