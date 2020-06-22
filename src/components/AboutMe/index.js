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
          Hello World! I'm Joe Moloughney and I'm a web developer. I proudly say I'm exactly where I want to be. I spend most of my days coding away whether it
          be for work or pleasure; You will almost always find me on the web. If not - I also enjoy a nice hikes & walks with my favorite
          pup, Dallas.
          <br/>
          <br/>
          Enough about me... now lets learn about you and your web needs & lets work together!
        </div>
      </div>
    );
  }
}

export default AboutMe;
