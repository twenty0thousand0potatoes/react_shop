import React, { useState, useEffect } from 'react';
import './mainComp.css';
import Header from './Header.jsx'
import { Routes, Route } from 'react-router-dom';
import TestComp from './TestComp';
import RegisterComp from './serviceComponents/RegisterComp.jsx';
import ServiceMain from './serviceComponents/ServiceMain';
import MainMenuComp from './menuComponents/MainMenuComp';
import FormOrder from './serviceComponents/FormOrder';

export default function MainComponent() {

  const [searchNameProduct, setSearchNameProduct] = useState('');

  function setNameProduct(value) {
    setSearchNameProduct(value);
  };

  const [cart, setCart] = useState([]);

  function repeatProducts(num) {
    const copyData = cart.concat();
    copyData[num].kol += 1;
    copyData[num].price = ((copyData[num].defaultPrice) * (copyData[num].kol)).toFixed(2);
    setCart(copyData);
  }

  function funSetCart(value) {
    let inArray = false;
    cart.forEach((elem, index) => {
      if (elem.id === value.id) {
        inArray = true;
        repeatProducts(index);
      }
    })
    if (!inArray) {
      setCart([...cart, value])
    }
  }

  function setStateCart(arr) {
    setCart(arr);
  }

const [ordersArray, setOrdersArray] = useState([]);
const [lenArr, setLenArr] = useState(0);

  function setOrders(value){
    setOrdersArray(value);
    setLenArr(ordersArray.length)
  }
  console.log(lenArr)

  return (
    <div className='textFont'>
      <Header funSearch={setNameProduct} cartObj={cart} setStateCart={setStateCart}  />
      <Routes>
        <Route path='/' element={<TestComp setState={funSetCart} />} />
        <Route path='/service' element={<RegisterComp />} />
        <Route path='/admin/*' element={<ServiceMain  orderInfo = {ordersArray}/>} kol = {lenArr}/>
        <Route path='/menu' element={<MainMenuComp searchNameProduct={searchNameProduct} setState={funSetCart} />} />
        <Route path='/menu/:id' element={<MainMenuComp />} />
        <Route path = '/enterInfo' element = {<FormOrder setOrders = {setOrders}/>}/>
      </Routes>
    </div>
  );
}
