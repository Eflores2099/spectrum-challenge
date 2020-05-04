import React, { Component } from 'react';
import NavBar from './Components/NavBar.js'
import ResultPage from './Components/ResultPage'
import GenrePage from './Components/GenrePage'
import { Switch, Route, withRouter} from 'react-router-dom'
import {withListData } from './Context/DataProvider.js'
import './App.css';
// import { super } from '@babel/types';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: "",
      genreInput: ""
    }
  }

  componentDidMount() {
    document.title = 'Restaurant Search'
}


handleChange = (event) => {
  const { name, value } = event.target
  this.setState({ [name]: value 
  })
}


handleSubmit = (event) => {
  event.preventDefault()
  this.props.getByState(this.state.userInput)
  this.props.history.push('/ResultPage')
}

handleGenreSubmit = (event) => {
  event.preventDefault()
  this.props.getByGenre(this.state.genreInput)
  this.props.history.push('/GenrePage')
}

render () {

  return (
    <div id= "container">
      <NavBar />

      <div className = "form">
        <form onSubmit={this.handleSubmit}>
          <input 
            type= 'text' 
            name = 'userInput' 
            value = {this.state.userInput} 
            placeholder = "Search by State" 
            onChange={this.handleChange}/>
          <button>Search</button>
        </form>
        
      </div>

    <div className = "form">
      <form onSubmit={this.handleGenreSubmit}>
        <input 
          type= 'text' 
          name = 'genreInput' 
          value = {this.state.genreInput} 
          placeholder = "Search by Genre" 
          onChange={this.handleChange}/> 
        <button>Search</button>      
      </form>      
    </div>  


      <Switch>
        <Route exact path = '/results' component={ResultPage} />
        <Route exact path = '/genre_results' component={GenrePage} />
      </Switch>
      </div>
  );
}
}

export default withListData(withRouter(App));
