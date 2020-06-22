import React, { Component } from 'react';
import './index.css';

class Demo extends Component {


  render(){

    return (
      <div className='demo-section'>
        <h1 className='recent-title'>Recent Works</h1>

          <a className='demo' id='grateful' href='http://www.GratefulCounselingServices.com' target='_blank' >Grateful Counseling Services LLC</a>

          <a className='demo' id='gamco' href='http://www.gabelli.com' target='_blank' >GAMCO Investors</a>

      </div>
    );
  }
}

export default Demo;
