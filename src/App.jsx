import React,{Component} from 'react';
import './App.css';
import Login from './components/Login';
import NotFoundPage from './components/404';
import apifetch from './components/apifetch';
import Success from './components/Success';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from  "react-router-dom";

class App extends Component 
{
  render()
  {
    return(
    <Router>
      <Switch>
        <Route exact path ="/" component={Login}/>
        <Route exact path ="/404" component={NotFoundPage}/> 
        <Route exact path ="/apifetch" component={apifetch}/> 
        <Route exact path ="/Success" component={Success}/> 
        <Redirect to="/404"/>
        </Switch>
    </Router>
    );
  }
}
export default App; 
