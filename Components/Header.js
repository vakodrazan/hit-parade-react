import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <h1>Hit Parade</h1>
            <div className="section-layout">
                <p><Link to="/">Popular songs </Link></p> 
                <p><Link to="/styles">Styles </Link></p> 
                <p><Link to="/add">Add </Link></p> 
                <p><Link to="/cart"><i className="ri-shopping-cart-fill"></i> Cart </Link></p> 
            </div>
        </header>
    )
}

export default Header
