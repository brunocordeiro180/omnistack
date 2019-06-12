import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

import logo from '../assets/logo.svg'
import camera from '../assets/camera.svg'

// import { Container } from './styles';

export default function Header() {
  return (
    <header id="main-header">
        <div className="header-content">
            <Link to="/">
                <img src={logo} alt="insta-rocket"></img>
            </Link>
            <Link to="/new">
                <img src={camera} alt="enviar-publicação"></img>
            </Link>
        </div>
    </header>
  );
}
