import React, { Component } from 'react';
import JSlogo from './javascript.png'
import ReactLogo from './react.png'
import HtmlLogo from './html.png'
import CssLogo from './css3.png'
import RailsLogo from './ruby.png'
import Postgresql from './postgresql.png'
import Fade from 'react-reveal/Fade';
import './index.css';

class Service extends Component {


  render(){

    return (
      <div className='service-section'>
        <Fade left>
          <div className='service-menu'>
            <ul>Available Services</ul>
            <li>General Web Advice & Help</li>
            <li>Web Planning & Designing + Wireframing</li>
            <li>Simplistic Web Design | Mobile Included</li>
            <li>Full Scale Web Design | Mobile Included</li>
            <br/>
            Lifetime customer service with on call service repair/edits.
          </div>
        </Fade>
        <Fade bottom>
          <img className='tool-img' src={ReactLogo}/>
          <img className='tool-img' src={RailsLogo}/>
          <img className='tool-img' src={Postgresql}/>
          <img className='tool-img' src={JSlogo}/>
          <img className='tool-img' src={HtmlLogo}/>
          <img className='tool-img' src={CssLogo}/>
        </Fade>
      </div>
    );
  }
}

export default Service;
