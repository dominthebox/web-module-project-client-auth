import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Login from './Login';
import axiosWithAuth from './../utils/axiosWithAuth';

const NavBar = () => {

    const logout = () => {
        localStorage.removeItem('token');
        window.location.href = '/';
    }
    
    return (
        <div>
            {localStorage.getItem('token') ? <Link onClick={logout}>Logout</Link> : <Link to='/'>Home</Link>}
        </div>
    )
}

export default NavBar;