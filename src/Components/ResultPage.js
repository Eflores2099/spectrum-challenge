import React from 'react'
import {withData} from '../Context/DataProvider'

const ResultPage = () => {
    const dataResults = props.restArr.map(restaurants => 
        <div>
            {restaurants.name}
        </div>
        )

        return (
            <div>
                {this.props.restArr[0].name.length ? 
                <>
                <h1>{name}</h1>
                <h3>{city}</h3>
                <h3>{state}</h3>
                <h3>{phone}</h3>
                </>

                    :<div className = "error-message">
                        <h2>No Restaurants were found in this state. The locals just eat Grape Nuts Cereal.</h2>
                     </div>   
                }
            </div>
        )

}

export default withData(ResultPage)
