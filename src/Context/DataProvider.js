import React, { Component } from 'react'
import axios from 'axios'
// import { render } from '@testing-library/react';

const DataContext = React.createContext()
const apiBaseUrl = "https://code-challenge.spectrumtoolbox.com/api/restaurants"
const apiKey = process.env.REACT_APP_API_KEY




class DataProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
         
    }






    render(){
        return (
            <DataContext.Provider value = {{getData:
                this.getData, restArr:
                this.state.restArr,}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

export const withData = C => props => (
    <DataContext.Consumer>
        {value => <C {...props} {...value}/>}
    </DataContext.Consumer>
)

export default DataProvider