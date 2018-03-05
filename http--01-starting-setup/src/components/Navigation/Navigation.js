import React from 'react'
import { NavLink } from 'react-router-dom';

const navigation = (props) => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink exact to="/new-post">New Post</NavLink></li>
            </ul>
        </nav>
    )
}

export default navigation;