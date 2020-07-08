import React, { Component } from 'react';
import LightSpeed from 'react-reveal/LightSpeed';
import Fade from 'react-reveal/Fade';
import './index.css';

class Header extends Component {


  render(){

    return (
      <div className='header-section'>
        <LightSpeed>
          <h1 className='main-title'>Jay Visions</h1>
        </LightSpeed>
        <Fade>
          <h2 className='title-desc'>You're Friendly Neighborhood Web Designer</h2>
        </Fade>
      </div>
    );
  }
}

export default Header;
