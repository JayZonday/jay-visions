import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './index.css';

class Navbar extends Component {


  render(){

    return (
      <div className='navbar'>
        <NavLink to='/'><button className='nav-btn'>Home</button></NavLink>
        <NavLink to='/services'><button className='nav-btn'>Services</button></NavLink>
        <NavLink to='/about'><button className='nav-btn'>About</button></NavLink>
        <NavLink to='/demos'><button className='nav-btn'>Demos</button></NavLink>
        <a href='mailto:JMoloughney25@gmail.com' target='_blank'><button className='nav-btn'>Contact Me</button></a>

      </div>
    );
  }
}

export default Navbar;
