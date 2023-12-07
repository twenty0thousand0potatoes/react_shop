import React from 'react';
import './headerMenu.css'
import { NavLink } from 'react-router-dom';

export default function HeaderMenu() {
  return (
    <div className='wrapperHeaderMenu'>
      <nav className='navList'>
        <ul>
            <li><NavLink to = '/' className='link'>Home</NavLink></li>
            <li><NavLink to = '/menu' className='link'>Products</NavLink></li>
            <li><NavLink to = '/service' className='link'>Service</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}
