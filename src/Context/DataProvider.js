import React, { Component } from 'react'
import axios from 'axios'
// import { render } from '@testing-library/react';

const DataContext = React.createContext()
const apiBaseUrl = "https://code-challenge.spectrumtoolbox.com/api/restaurants"
const apiKey = process.env.REACT_APP_API_KEY


class DataProvider extends Component {
    constructor() {
        super()
        this.state = {
            restaurantData : [{
                name: "",
                city: "",
                state: "",
                telephone: "",
                genre: ""
        }],

        restByState: [{
            name: "",
            city: "",
            state: "",
            telephone: "",
            genre: ""
        }],
        restByGenre: [{
            name: "",
            city: "",
            state: "",
            telephone: "",
            genre: ""
        }]
    }

    getByState = (userInput) => {
        axios.get(`${apiBaseUrl}${apiKey}?by_state=${userInput}`).then(response => {
            console.log(response)
            this.setState({
                restByState: response.data.length ? response.data :[{
                    name: "",
                    city: "",
                    state: "",
                    telephone: "",
                    genre: ""
                }]
            })
        })
    }

    getByGenre = (userInput) => {
        axios.get(`${apiBaseUrl}${apiKey}?by_genre=${userInput}`).then(response => {
            console.log(response)
            this.setState({
                restByGenre: response.data.length ? response.data : [{
                    name: "",
                    city: "",
                    state: "",
                    telephone: "",
                    genre: ""
                }]
            })
        })
    }

}

    render() {
        return (
            <DataContext.Provider 
                value = {{
                    getByState: this.getByState, 
                    restaurantData: this.state.restaurantData,
                    getByGenre: this.state.getByGenre 
                }}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}


export const withListData = C => props => (
    <DataContext.Consumer>
        {value => <C {...props} {...value} />}
    </DataContext.Consumer>
)

export default DataProvider