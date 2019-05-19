import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';


ReactDOM.render(
  <Router history={createBrowserHistory()} >
    <Switch >
      <Route exact path='/' component={Experience} />
      <Route path='/projects' component={Projects} />
      <Route path='/education' component={Education} />
    </Switch>
  </Router>
  , document.querySelector('#root'))
