import React from 'react';
import logo from '../../assets/logo.svg'

const Logo = () => {
    return (
        <a href="./index.html">
            <img class="h-12" src={logo} alt="Weather App" />
        </a>
    );
};

export default Logo;