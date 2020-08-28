import React, { Component } from 'react';
import styled from 'styled-components';
import { calc_total_purchase, final_buy } from '../../helper'

//componets
import Item from './Item'

class Buy extends Component {

    get_total = () => {
        let { purchase } = this.props
        return calc_total_purchase(purchase)
    }

    buy_now = () => {
        let { purchase, persona_data } = this.props
        let buy_now = [
            {...{
                purchase,
                persona_data
            }}
        ]
        final_buy(buy_now)
    }

    render() {
        let { purchase } = this.props

        const Title = styled.div`
            display: grid;
            margin: 50px 20% 50px 20%;
            grid-template-columns: 30% 30% 40%;
            grid-row-gap: 10px; 
        `

        const Container = styled.div`
            display: grid;
            margin: 50px 20% 50px 20%;
            grid-template-columns: 30% 30% 40%;
            grid-row-gap: 10px;
            border-top: 2px dashed black;
            border-bottom: 2px dashed black;
        `

        const Description = styled.span`
            display: grid;
            justify-self:center;
            align-self: center;
            font-size: 40px;
            font-weight: bold;
            border-bottom: 2px dashed black;
            @media (max-width: 768px){
                font-size: 15px;
            }
        `

        const Total = styled.span`
            display: grid;
            margin: 50px 20% 50px 20%;
            grid-template-columns: 50% 50%;
            grid-row-gap: 10px; 
        `

        const Span = styled.span`
            display: grid;
            margin: 50px 30% 50px 30%;
            grid-template-columns: 100%;
            grid-row-gap: 10px;
        `

        const Button = styled.button`
            background-color: #3860ab;
            height: 50px;
            border-radius: 35px;
            text-align: center;
            border: none;
            font-size: 25px;
            font-weight: bold;
            @media (max-width: 768px){
                font-size: 15px;
            }       
        `


        return (
            <>
                <Title>
                    <Description>Prod</Description>
                    <Description>Count</Description>
                    <Description>Total</Description>
                </Title>
                <Container>
                    {
                        Object.keys(purchase).map(key => ( 
                            <Item 
                                {...{
                                    key
                                }}
                                item={purchase[key]}
                            />
                        ))
                    }
                </Container>
                <Total>
                    <Description>Total: </Description>
                    <Description>{`$${this.get_total()}`}</Description>
                </Total>
                <Span>
                    <Button onClick={() => this.buy_now()}>
                        <i className="fas fa-money-bill-wave"></i> BUY NOW
                    </Button>
                </Span>
            </>
        )
    }
}

export default Buy;