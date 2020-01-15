import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'
import Service from './components/Service'
import Demo from './components/Demo'
import MainBody from './components/MainBody'
import CentralHome from './components/CentralHome'
import './App.css';


class App extends Component {


  render(){

    return (
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={ CentralHome } />
          <Route path='/about' exact component={ AboutMe } />
          <Route path='/services' exact component={ Service } />
          <Route path='/demos' exact component={ Demo } />
        </Switch>
        <Footer/>
      </Router>
    );
  }
}

export default App;
