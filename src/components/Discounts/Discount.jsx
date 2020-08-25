import React from 'react';
import styled from 'styled-components'

//Componenst
import ProductDiscount from './ProductDiscount'

const Title = styled.h1`
    margin-top: 50px;
    text-align: center;
`

const Container = styled.div`
    display: grid;
    padding: 50px 20% 50px 20%;  
    grid-template-columns: 40% 60%;
    grid-row-gap: 30px;
    border-right: 3px solid #E8E8E8;
    border-bottom: 3px solid #E8E8E8; 
    @media (max-width: 768px){
        grid-template-columns: 100%;
        text-align: center;
    }
`

const Discount = props => {
    let discounts = props.products.filter(i => i.discount === true)
    return (
        <>
            <Title>Products Discounts</Title>
            <Container>
                {
                    Object.keys(discounts).map(key => (
                        <ProductDiscount 
                            key={key}
                            products={discounts[key]}
                        />
                    ))
                }
            </Container>
        </>
    );
};

export default Discount;