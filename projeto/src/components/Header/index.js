import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import logo from './../../assets/space.png'

export default function Header() {
    return(
        <Container>
            <Link to="/">
                <img src={logo} style={{width: '100', height: '50'}} alt="Space"/>
            </Link>
        </Container>
    )
}