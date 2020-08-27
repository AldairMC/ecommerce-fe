import React from 'react';
import styled from 'styled-components'

//Style hero
const Container = styled.div`
    display: grid;    
    height: 500px;
    width: 100%;
`

const Img = styled.img`
    height: 400px;
    width: 100%;
    align-self: center;
    jusitfy-self: center;
`

const Titulo = styled.span`
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    width: 100%;
`

const Header = props => {
    let { description } = props
    return (
        <Container>
            <Img 
                src="assets/hero.png"
                alt="Hero"
            >
            </Img>
            <Titulo>{description}</Titulo>
        </Container>
    );
}

export default Header;