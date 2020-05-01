import React, { Component } from 'react';
import NavBar from './Components/NavBar.js'
// import Home from './Components/Home'
import ResultPage from './Components/ResultPage'
import { Switch, Route, withRouter} from 'react-router-dom'
import {withListData } from './Context/DataProvider.js'
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.getListData()
}


handleChange = (event) => {
  const { name, value } = event.target
  this.setState({ [name]: value })
}


handleSubmit = (event) => {
  event.preventDefault()
  
  this.props.setSearchType("string", this.state.searchString)

  this.props.history.push(`/results/${this.state.searchString}`)

  this.setState({
      searchString: ''
  })
}

render () {

  return (
    <div id= "container">
      <NavBar />
      <form onSubmit={this.handleSubmit}>
        <input type= 'text' name = 'searchString' value = {this.state.searchString} placeholder = "Search by State" onChange={this.handleChange} />
      </form>


      <Switch>
        <Route exact path = '/results' component={ResultPage} />
      </Switch>
      </div>
  );
}
}

export default withListData(withRouter(App));
