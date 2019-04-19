import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch.js';

import './App.css';
import Banner from './container/Banner';
import HeaderMain from './container/HeaderMain';
import NavBar from './container/NavBar';
import FooterWrap from './footer/FooterWrap';

import paper1 from './img/paper1.gif';
import paper2 from './img/paper2.jpg';
import paper3 from './img/paper3.jpg';
import paper4 from './img/paper4.jpg';
import paper5 from './img/paper5.jpg';
import paper6 from './img/paper6.jpg';
import paper7 from './img/paper7.jpg';



class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <header className="App-header">
          <Banner/>
           <HeaderMain/>
           <NavBar/>
           <Switch> 
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/shop' component={Shop} />
            <Route path='/login' component={Login} /> 
            <Route component={NoMatch} />    
           </Switch>
        </header>
        <section>
          <div>
          <img src={paper1} alt='Logo'/>
          </div>
          <div>
          <img src={paper2} alt='Logo'/>
          </div>
          <div>
          <img src={paper3} alt='Logo'/>
          </div>
          <div>
          <img src={paper4} alt='Logo'/>
          </div>
          <div>
          <img src={paper5} alt='Logo'/>
          </div>
          <div>
          <img src={paper6} alt='Logo'/>
          </div>
          <div>
          <img src={paper7} alt='Logo'/>
          </div>
        </section>
        <FooterWrap/>
      </Router>   
      </div>
    );
  }
}

export default App;
