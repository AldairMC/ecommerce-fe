import React from 'react';
import styled from 'styled-components'

//Style container
const Container = styled.div`
    height: 250px;
    border-right: 3px solid #E8E8E8;
    border-bottom: 3px solid #E8E8E8;
    border-radius: 3px;
`

const Img = styled.img`
    transition: 0.8s ease;
    &:hover {
        -webkit-transform: scale(3.4);
        transform: scale(3.4) 
    }
`

const Buttons = styled.div`
    display: grid;
    grid-template-columns: 40% 20% 40%;
`

const Button = styled.button`
    background-color: white;
    border: none;
    font-size: 25px;
    color: #AAAFAA;
`

const Count = styled.span`
    align-self: center;
`

const onClick = () => {
    console.log("Hola")
}

const Product = (props) => {
    let { name, src, price } = props.product
    return (
        <Container>
            <p>{name}</p>
            <Img src={src} alt="Image" width="100px" height="100px"/>
            <p>{`$${price}`}</p>
            <Buttons>
                <Button onClick={onClick}> <i className="fas fa-minus-circle"></i> </Button>
                <Count> 5 </Count>
                <Button> <i className="fas fa-plus-circle"></i> </Button>
            </Buttons>
        </Container>
    );
};

export default Product;