import React, { Component } from 'react';
import Gamco from './gamco.png'
import Grateful from './grateful.png'
import './index.css';

class Demo extends Component {


  render(){

    return (
      <div className='demo-section'>
        <h1 className='recent-title'>Recent Works</h1>

        <div className='demos'>
          <a className='demo' id='grateful' href='http://www.GratefulCounselingServices.com' target='_blank' >Grateful Counseling Services LLC</a>

          <a className='demo' id='gamco' href='http://www.gabelli.com' target='_blank' >GAMCO Investors</a>
        </div>
      </div>
    );
  }
}

export default Demo;
