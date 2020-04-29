import React, { Component } from 'react'
import { withRest } from '../Context/RestProvider'



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
        this.props.getRest(this.state.userInput)
        this.props.history.push('/ResultPage')
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}


export default withRest(Home)