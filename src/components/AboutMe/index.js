import React, { Component } from 'react';
import BioPic from './J-Portfolio3.png'
import './index.css';

class AboutMe extends Component {


  render(){

    return (
      <div className='about-section'>
        <h1 className='about-title'> All About Jay </h1>
        <img className='bio-pic' src={BioPic}/>
        <div className='bio-desc'>
          Hi! My name is Joseph Moloughney and I'm a web developer. My journey to this day, has been a long and challenging
          journey - however - I can happily say I'm exactly where I want to be now. I spend most of my days coding away whether it
          be for work or pleasure; You're almost certainly find me on the web. If not - I always enjoy a nice walk with my favorite
          pup, Dallas.
          <br/>
          <br/>
          Enough about me... now lets learn about you and what your web needs are and lets get to work!
        </div>
      </div>
    );
  }
}

export default AboutMe;
