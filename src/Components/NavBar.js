import React from 'react'
import { Link } from 'react-router-dom'
// import { tsPropertySignature } from '@babel/types';


const NavBar = (props) => {
    const {navToggle, toggler} = props 
    return (
        <div onClick = {toggler} className = {`nav nav-${navToggle ? "open" : "closed"}`}>
            <Link to = '/'>Home</Link>
        </div>    
    )
}

export default NavBar