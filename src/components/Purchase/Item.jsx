import React, { Component } from 'react';
import styled from 'styled-components';
import { calc_total } from '../../helper'

class Item extends Component {
    render() {
        let { cantidad, src, price, type } = this.props.item

        const Image = styled.img`
            display: grid;
            justify-self: center;
            align-self: center;
            width: 100px;
            height: 100px;
        `

        const Count = styled.span`
            display: grid;
            justify-self: start;
            align-self: center;
            font-size: 50px;
            color: blue;
            @media (max-width: 768px){
                font-size: 20px;
                justify-self: center;
            }
        `

        const Price = styled.span`
            display: grid;
            justify-self: center;
            align-self: center;
            font-size: 50px;
            color: red;
            @media (max-width: 768px){
                font-size: 20px;
            }
        `

        return (
            <>
                <Image src={src} alt="Image" />
                <Count>{`X${cantidad}`}</Count>
                <Price>{`$${calc_total(price, cantidad, type)}`}</Price>
            </>
        );
    }
}

export default Item;