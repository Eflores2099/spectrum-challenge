import React from 'react'
import axios from 'axios'
// import { render } from '@testing-library/react';

const RestContext = React.createContext()

class RestProvider extends Component {
    constructor() {
        super()
        this.state = {
            restArr: [{
                name: '',
                city: '',
                state: '',
                phone: '',
                genre: ''
        }]
        }
         this.url = "https://code-challenge.spectrumtoolbox.com/api/restaurants"
    }

    getRest = (userInput) => {
        axios.get(`https://code-challenge.spectrumtoolbox.com/api/restaurants?by_state=${userInput}`).then(response => {
            this.setState({
                restArr: response.data.length ? response.data : [{
                    name: "", 
                    city: "", 
                    state: "", 
                    phone: ""
                }]})
        })
    }
}


    render() {
        return(
            <RestContext.Provider value = {{getRest:
                this.getRest:
                this.state.restArr:}}>
                {this.props.children}
            </RestContext.Provider>
        )
    }
}

export const withRest = C => props => (
    <RestContext.Consumer>
        {value => <C {...props} {...value}/>}
    </RestContext.Consumer>
)

export default RestProvider