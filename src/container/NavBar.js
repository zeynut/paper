import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
    
    render() {
       
        return (
            <div className="NavBar">
            <NavLink className='Link' exact to='/' activeStyle="active1">Good2Box</NavLink>
            <NavLink className='Link1' exact to='/about' activeStyle="active1">About</NavLink>
            <NavLink className='Link1' to='/shop' activeStyle="active1">Shop</NavLink>
            <NavLink className='Link1' exact to='/contact' activeStyle="active1">Contact</NavLink>
            <NavLink className='Link1' to='/login' activeStyle='active1'>Login</NavLink>
            </div>
        );
    }
}

export default NavBar;