import React, { Component } from 'react';
import {withRest } from './Context/RestProvider.js'
import './App.css';

class App extends Component {

  componentDidMount() {

  }

render () {

  return (
    <div>
      This is my app
    </div>
  );
}
}

export default withRest(App);
