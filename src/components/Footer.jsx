import React from 'react';
import styled from 'styled-components'

const Container = styled.footer`
    display: flex;    
    height: 150px;
    background-color: #E8E8E8;
    width: 100%;
`

const Titulo = styled.span`
    text-align: center;
    align-self: center;
    width: 100%;
    font-style: italic; 
`

const Footer = () => {
    return (
        <Container>
            <Titulo> All right reserved &copy; </Titulo>      
        </Container>
    );
};

export default Footer;