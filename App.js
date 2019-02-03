import React, { Component } from 'react';

import './App.css';
import HomeIcon from '@material-ui/icons/Home'
import Button from '@material-ui/core/Button';

import Matches from './Matches';
import Search from './Search';
import Loading from './Loading.js';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import { HashRouter } from 'react-router-dom'


function GoHome() {
  if(window.location.hostname === "localhost")
    window.location.assign('/');
  else
    window.location.assign('http://proj.ruppin.ac.il/bgroup70/test1/react_server');
};

const Header = props => (
  
  <div data-role="header" class="ui content" id="myHeader">
    <p>DateMe</p>
    <Button id="homeBtn" variant="contained" onClick={GoHome} color="primary" >
      <HomeIcon />
    </Button>
  </div>);

const Footer = props => (
  <div data-role="footer" id="myFooter">
    <p>Designed by Bgroup70</p>
  </div>);


class App extends Component {
  

  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header key="Header" />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/matches/" component={Matches} />
            <Route path="/loading/" component={Loading} />
          </Switch>
          <Footer key="Footer" />
        </div>
      </HashRouter>
    )
  }
}


export default App;