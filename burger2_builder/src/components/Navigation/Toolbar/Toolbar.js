import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = (props) => {
    return (
        <header className='toolbar'>
            <div>MENU</div>
            <div className="toolbarLogo">
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </header>
    );
}

export default Toolbar;