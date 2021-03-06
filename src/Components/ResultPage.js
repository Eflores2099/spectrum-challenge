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

    renderTable() {
        return this.state.restByState.sort.map((restaurant, index) => {
            const { name, city, state, telephone, genre } = restaurant
            console.log(this.props.restaurant)
            return (
                <tr>
                    <td>{name}</td>
                    <td>{city}</td>
                    <td>{state}</td>
                    <td>{telephone}</td>
                    <td>{genre}</td>
                </tr>
            )
        }) 
    }       

    render() {
        return (
            <div>
                <h1 id ='title'>Search Results</h1>
                <table id= "restaurants">
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        )
    }

}



export default withListData(ResultPage)
