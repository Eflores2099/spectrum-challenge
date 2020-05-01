import React, { Component } from 'react'
import {withListData} from '../Context/DataProvider'
// import { Link } from 'react-router-dom'
// import { super } from '@babel/types';

class ResultPage extends Component {
    constructor(props) {
        super(props) 
        this.state = {

        }   
    }

    componentDidMount() {
        this.props.setSearchType("string", this.props.match.params._id)

        document.title = "Search Results"
    }

render() {


    return (
        <main>

            <h1>Search Results</h1>
            <h2>{this.props.match.params._id}</h2>

        </main>
    )
}



}

export default withListData(ResultPage)
