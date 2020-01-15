import React, { Component } from 'react';
import './index.css';

class Demo extends Component {


  render(){

    return (
      <div className='demo-section'>
        <h1 className='recent-title'>Recent Works</h1>

        <div className='demo'>
          <a href='http://www.JosephWilliam.tk' target='_blank'>Portfolio Site</a>
        </div>
        <div className='demo'>
          <a href='http://www.GratefulCounseling.tk' target='_blank' >Grateful Counseling Services LLC</a>
        </div>
      </div>
    );
  }
}

export default Demo;
