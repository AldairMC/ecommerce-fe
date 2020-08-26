import React, { Component } from 'react';
import styled from 'styled-components'
import { element } from 'prop-types';


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
            cursor: pointer;
        `

        const Count = styled.span`
            align-self: center;
        `

        let { id, name, src, price } = this.props.product
        return (
            <Container>
                <p>{name}</p>
                <Img src={src} alt="Image" width="100px" height="100px"/>
                <p>{`$${price}`}</p>
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