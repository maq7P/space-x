import React from 'react';
import logo from '../../logo.svg';
import {Link, NavLink} from 'react-router-dom';

import './header.css';

const Header = ({rocketsNames, changeRocket}) => {
    const li = rocketsNames.map((name,i) => (
        <li className="item" key={name}>
            <Link to="/rockets"
                className="item-link"
                onClick={() => {
                    changeRocket(name);
                }}
            >{name}</Link>
        </li>
    ));
    return(
        <header className="header">
            <Link to="/">
                <img
                    src={logo}
                    alt="Logo Space X"
                    className="logo"
                />
            </Link>
            <nav className="main-nav nav">
                <ul className="list">
                    {li}
                </ul>
            </nav>
            <nav className="secondary-nav">
                <ul className="list">
                    <li className="item">
                        <NavLink exact to="/" 
                        className="item-link"
                        activeClassName="active">Home</NavLink>
                    </li>
                    <li className="item">
                        <NavLink exact to="/Calendar" 
                        className="item-link"
                        activeClassName="active">Calendar</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;