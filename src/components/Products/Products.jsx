import React from 'react';
import styled from 'styled-components'

//components 
import Product from './Product'

const Container = styled.div`
    display: grid;
    width: 100%;
    margin: 0 10% 50px 7%;
    grid-template-columns: repeat(3, 25%);
    text-align: center;
    @media (max-width: 330px){
        grid-template-columns: 100%;
        grid-row-gap: 25px;
        overflow-x: hidden;
        margin: 0;
    }
    grid-row-gap: 25px;
    grid-column-gap: 5%; 
`

const Products = props => {
    let { products, addProduct, delProduct, purchase, get_count } = props
    return (
        <Container>
            {
                Object.keys(products).map(key => (
                    <Product 
                        {...{
                            key,
                            addProduct,
                            delProduct,
                            purchase,
                            get_count
                        }}
                        product={products[key]}
                    />
                ))
            }
        </Container>
    );
};

export default Products;