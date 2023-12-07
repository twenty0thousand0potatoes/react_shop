import React from 'react';
import Logo from './Logo.jsx';
import './header.css';
import HeaderMenu from './HeaderMenu.jsx';
import SearchComp from './SearchComp.jsx';
import Cart from './Cart';

export default function Header(props) {
  return (
    <div className='headerWrapper'>
      <Logo/>
      <HeaderMenu/>
      <SearchComp funSearch = {props.funSearch}  />
    <Cart cartObj = {props.cartObj}  setStateCart = {props.setStateCart}   />
    </div>
  );
}
