import React, { Component } from 'react';
import BioPic from './J-Portfolio3.png'
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal/Fade';

import './index.css';

class AboutMe extends Component {


  render(){

    return (
      <div className='about-section'>
        <Fade top>
          <h1 className='about-title'> All About Jay </h1>
        </Fade>
        <Fade bottom>
          <img className='bio-pic' src={BioPic}/>
          <div className='bio-desc'>
            Hello World! I'm Joe Moloughney and I'm a web developer. I spend most of my days coding away whether it
            be for work or pleasure; You will almost always find me on the web. If not - I also enjoy a nice hikes & walks with my favorite
            pup, Dallas.
            <br/>
            <br/>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString(`Enough about me... now lets learn about your web needs & get to work together!`)
                  .callFunction(() => {
                    console.log('String typed out!');
                  })
                  .pauseFor(5500)

                  .callFunction(() => {
                    console.log('All strings were deleted');
                  })
                  .start();
              }}
            />
          </div>
        </Fade>
      </div>
    );
  }
}

export default AboutMe;
