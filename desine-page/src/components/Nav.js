
import React from 'react';
import './Nav.css';
import logo from './assets/softmind_logo.png'
import { FaSearchengin } from "react-icons/fa";

function Nav() {
  return (
      <div className='nav'>
            <img src={logo} alt="" />
            <div className='searchbox'>
            <input className='searchinput' type="text" placeholder='Search'  />
            <FaSearchengin className='serchicone' />
            </div>
            
            
    </div>
  )
}

export default Nav
