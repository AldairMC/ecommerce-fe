import React from 'react';
import styled from 'styled-components'
import { description_discount } from '../../helper'

const Card = styled.div`
    display: grid;
    grid-template-columns: 100%;
    max-height: 100%;
    max-width: 100%;
`

const Description = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 30% 30% 40%;
`

const Name = styled.span`
    font-size: 30px;
    align-self: end;
`

const Price = styled.span`
    font-size: 25px;
    color: Blue;
    font-weight: bold;
`

const Type = styled.span`
    font-size: 20px;
`

const ProductDiscount = props => {
    let { name, price, type, src } = props.products
    return (
        <>
            <Card>
                <img src={src} alt="Image" />
            </Card>
            <Description>
                <Name>{name}</Name>
                <Price>{`Price: $${price}`}</Price>
                <Type>{description_discount(type)}</Type>
            </Description>
        </>
    );
};

export default ProductDiscount;