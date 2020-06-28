import React, { Component } from 'react';
import Header from '../Header'
import Demo from '../Demo'
import AboutMe from '../AboutMe'
import Service from '../Service'

import './index.css';

class CentralHome extends Component {


  render(){

    return (
      <div>
        <Header/>
        <AboutMe/>
        <Service/>
        <Demo/>
      </div>
    );
  }
}

export default CentralHome;
