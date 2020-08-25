import React from 'react';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

//Navbar styles
const Nav = styled.nav`
    display: grid;
    grid-template-columns: 40% 20% 40%;
    height: 75px;
    background-color: #fdd000;
    justify-self: center;
    text-align: center;
`

const Navbar = () => {
    return (
        <Nav>
            <NavLink to="/">
                <h1> <i className="fas fa-dumpster"></i> PS</h1>
            </NavLink>
            <NavLink to="/buy">
                <h2> <i className="fas fa-shopping-cart"></i> </h2>
            </NavLink>
            <NavLink to="/discount">
                <h2><i className="fas fa-tags"></i></h2>
            </NavLink>
        </Nav>
    );
};

export default Navbar;