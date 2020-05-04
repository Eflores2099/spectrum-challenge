import React, { Component } from 'react'
import axios from 'axios'
import { render } from '@testing-library/react';

const DataContext = React.createContext()
const apiBaseUrl = "https://cors-anywhere.herokuapp.com/https://code-challenge.spectrumtoolbox.com/api/restaurants/"
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
        }]

        // restByState: [{
        //     name: "",
        //     city: "",
        //     state: "",
        //     telephone: "",
        //     genre: ""
        // }],
        // restByGenre: [{
        //     name: "",
        //     city: "",
        //     state: "",
        //     telephone: "",
        //     genre: ""
        // }]
    }
}
    
getByState = (userInput) => {
        console.log('You have submitted a state.')
        axios.get(`${apiBaseUrl} ? by_state=${userInput}`, 
        {headers: 
            { "Authorization": `${apiKey}`,
        "X-Requested-With" : "XMLHttpRequest"}})
        .then(response => {
            console.log(response)
            this.setState({
                restaurantData: response.data.length ? response.data :[{
                    name: "",
                    city: "",
                    state: "",
                    telephone: "",
                    genre: ""
                }]
            })
            .catch(error => {
                console.log('error')
            })
        })
    }

    getByGenre = (genreInput) => {
        console.log("You have submitted a genre.")
         axios.get(`${apiBaseUrl}${apiKey} ? by_genre=${genreInput}`).then(response => {        
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
            .catch(error => {
                console.log('error')
            })
        })
    }



    render() {
        return (
            <DataContext.Provider 
                value = {{
                    getByState: this.getByState, 
                    restaurantData: this.restaurantData,
                    getByGenre: this.getByGenre 
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