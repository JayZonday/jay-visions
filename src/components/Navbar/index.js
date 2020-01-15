import React, { Component } from 'react';
import './index.css';

class Navbar extends Component {


  render(){

    return (
      <div className='navbar'>
        <button className='nav-btn'>Contact Me</button>
        <button className='nav-btn'>Services</button>
        <button className='nav-btn'>About</button>
        <button className='nav-btn'>Demos</button>
      </div>
    );
  }
}

export default Navbar;
