import React, { Component } from 'react';
import './index.css';

class Demo extends Component {


  render(){

    return (
      <div className='demo-section'>
        <h1 className='recent-title'>Recent Works</h1>

        <div className='demo' id='portfolio'>
          <a className='demo-link' id='portfolio' href='http://www.JosephWilliam.tk' target='_blank'>Portfolio Site</a>
        </div>
        <div className='demo' id='grateful'>
          <a className='demo-link' id='grateful' href='http://www.GratefulCounselingServices.com' target='_blank' >Grateful Counseling Services LLC</a>
        </div>
        <div className='demo' id='gamco'>
          <a className='demo-link' id='gamco' href='http://www.gabelli.com' target='_blank' >GAMCO Investors</a>
        </div>
      </div>
    );
  }
}

export default Demo;
