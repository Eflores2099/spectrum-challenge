import React, { Component } from 'react';
import NavBar from './Components/NavBar.js'
import Home from './Components/Home'
import { Switch, Route, withRouter} from 'react-router-dom'
import {withData } from './Context/DataProvider.js'
import './App.css';

class App extends Component {

  componentDidMount() {
    document.title = "Restaurant Search"
  }

render () {

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path ='/' component = {Home}/>
      This is my app
      </Switch>
    </div>
  );
}
}

export default withData(withRouter(App));
