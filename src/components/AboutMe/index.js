import React, { Component } from 'react';
import BioPic from './J-Portfolio3.png'
import './index.css';

class AboutMe extends Component {


  render(){

    return (
      <div className='about-section'>
        <h1 className='about-title'> All About Jay </h1>
        <img className='bio-pic' src={BioPic}/>
      </div>
    );
  }
}

export default AboutMe;
