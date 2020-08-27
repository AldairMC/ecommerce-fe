import React, { Component } from 'react';
import styled from 'styled-components'


class Product extends Component {

    onClickDel = (data) => {
        let count = this.props.get_count(data.id)?.cantidad
        if(count === undefined || count === 0) return console.log("profucto ixe")
        else this.props.delProduct(data)
    }
    
    onClickAdd = data => {
        this.props.addProduct(data)
    }

    render() {

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
                -webkit-transform: scale(2.4);
                transform: scale(2.4)
            }
        `

        const Name = styled.span`
            display: grid;
            font-size: 30px;
            color: #ffcb05;
            font-weight: bold;
            text-shadow: 3px 3px 3px #3662ac; 
        `

        const Price = styled.span`
            display: grid;
            font-size: 25px;
            color: #3662ac;
            margin-bottom: 30px;
            font-weight: bold;
        `

        const Buttons = styled.div`
            display: grid;
            grid-template-columns: 40% 20% 40%;
            &:hover {
                color: red;
            }
        `

        const Button = styled.button`
            background-color: white;
            border: none;
            font-size: 25px;
            color: #AAAFAA;
            cursor: pointer;
        `

        const Count = styled.span`
            align-self: center;
            font-size: 25px;
            color: #3662ac;
            text-shadow: 2px 2px 2px #3662ac; 
        `

        let { id, name, src, price } = this.props.product
        return (
            <Container>
                <Name>{name}</Name>
                <Img src={src} alt="Image" width="100px" height="100px"/>
                <Price>{`$${price}`}</Price>
                <Buttons>
                    <Button onClick={() => this.onClickDel(this.props.product)}> <i className="fas fa-minus-circle"></i> </Button>
                    <Count> { this.props.get_count(id)?.cantidad || 0 } </Count>
                    <Button onClick={() => this.onClickAdd(this.props.product)}> <i className="fas fa-plus-circle"></i> </Button>
                </Buttons>
            </Container>
        );
    }
}

export default Product;