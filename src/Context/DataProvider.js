import React, { Component } from 'react'
import axios from 'axios'

// import { render } from '@testing-library/react';

const DataContext = React.createContext()
const apiBaseUrl = "https://code-challenge.spectrumtoolbox.com/api/restaurants"
const apiKey = process.env.REACT_APP_API_KEY

let restaurants


class DataProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
                    setSearchType: this.setSearchType,
                    restByState: this.restByState ,                  
                    searchString: props.match.params._id || '',
                    searchType: (typeof props.match.params._id === Number) ? 'genre' : (typeof props.match.params._id !== Number) ? 'string' : '',
                    errMsg: ''
            }
        }

        getListData = async () => {
            this.setState({
                errMsg: ""
            })

            try {

        if (this.state.searchType === "string" && this.state.searchString) {
            restaurants = await axios.get(`${apiBaseUrl}${apiKey}/search.php?s=${this.state.searchString}`)

            this.setState({
                restaurants: restaurants.data.name,
                searchString: ""
            })
        }
         
        this.setState({
            searchType: "",

        })

    } catch (err) {

    }
}    


    setSearchType = (sType, id) => {
        this.setState({
            searchType: sType
        })
        if (sType === "genre") {
            this.setState({
                searchGenre: id
            }, () => this.getListData())
        }

        if (sType === "string") {
            this.setState({
                searchString: id
            }, () => this.getListData())
        }
    
    }

    render() {
        return (
            <DataContext.Provider 
                value = {{
                    ...this.state,
                    getListData: this.getListData, 
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