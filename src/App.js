import React, { Component } from 'react';
import NavBar from './Components/NavBar.js'
// import Home from './Components/Home'
import ResultPage from './Components/ResultPage'
import { Switch, Route, withRouter} from 'react-router-dom'
import {withListData } from './Context/DataProvider.js'
import './App.css';
// import { super } from '@babel/types';

class App extends Component {
  constructor() {
    super()
    this.state = {
      userInput: "",
    }
  }

  componentDidMount() {
    // this.props.getListData()
    document.title = 'Restaurant Search'
}


handleChange = (event) => {
  const { name, value } = event.target
  this.setState({ [name]: value 
  })
}


handleSubmit = (event) => {
  event.preventDefault()
  this.props.getByState(this.userInput)
  this.props.history.push('/ResultPage')
}

handleGenreSubmit = (event) => {
  event.preventDefault()
  this.props.getByGenre(this.state.userInput)
  this.props.history.push('/ResultPage')
}

render () {

  return (
    <div id= "container">
      <NavBar />
      <form onSubmit={this.handleSubmit}>
        <input 
        type= 'text' 
        name = 'userInput' 
        value = {this.state.userInput} 
        placeholder = "Search by State" 
        onChange={this.handleChange}/>
      </form>


      <Switch>
        <Route exact path = '/results' component={ResultPage} />
      </Switch>
      </div>
  );
}
}

export default withListData(withRouter(App));
