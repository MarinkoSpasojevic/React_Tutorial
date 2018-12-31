import React from 'react';
import './Logo.css';
import burgerLogo from '../../assets/images/burger-logo.png';

const Logo = (props) => {
    return ( 
        <div className="logo">
            <img src={burgerLogo} alt="Burger logo" />
        </div>
     );
}
 
export default Logo;