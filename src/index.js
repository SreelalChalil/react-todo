import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import Create from './components/Create';
import Update from './components/Update';
ReactDOM.render(
  <Router >
    <Switch>
      <Route exact path="/" render={() => <App> <Home /> </App> } />
      <Route path="/new" render={() => <App> <Create /> </App> } />
      <Route exact path='/edit/:id' render= {props => <App><Update {...props} /></App>} />
   </Switch>
   </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
