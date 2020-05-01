import React, { Component } from 'react'
import { withListData } from '../Context/DataProvider'



class Home extends Component {
    constructor() {
        super()
        this.state = {userInput: "" 

        }
    
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.getListData(this.state.userInput)
        this.props.history.push('/ResultPage')
    }

    render() {
        return (
            <div className = "form">
                <form onSubmit = {this.handleSubmit}>
                    <input className = "user-input"
                        type ="text"
                        name= "userInput"
                        value = {this.state.userInput} 
                        onChange = {this.handleChange}
                        placeholder = "select a state" />
                <button className = "button">Submit</button>  
                </form>              
            </div>
        )
    }
}


export default withListData(Home)