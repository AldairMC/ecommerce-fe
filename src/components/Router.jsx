import React, { Component } from 'react';
import { BrowserRouter as BRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components' 

//Components
import Header from './Header'
import Navbar from './Navbar'
import Products from './Products/Products'
import Footer from './Footer'
import Buy from './Buy'
import Discount from './Discount'

class Router extends Component {
    constructor(props){
        super(props)
        this.state = {
            products: [
                {id: 1, src: "https://i.ibb.co/r02btq9/003.png", name: "Dragon", price: 50},
                {id: 2, src: "assets/006.png", name: "Sapo", price: 100},
                {id: 3, src: "assets/009.png", name: "Tortuga", price: 550},
                {id: 4, src: "assets/015.png", name: "Abeja", price: 510},
                {id: 5, src: "assets/031.png", name: "Dino", price: 505},
                {id: 6, src: "assets/034.png", name: "Rata", price: 570},
            ]
        }
    }

    render() {
        let { products } = this.state

        const Container = styled.div`
            overflow-x: hidden;
        `
        
        return (
            <Container>
                <BRouter>   
                    <Navbar />
                    <Switch>
                        <Route exact path="/" render={() => (
                            <>
                                <Header 
                                    description={"List of the poke-products"}
                                />
                                <Products 
                                    {...{
                                        products
                                    }}
                                />
                            </>
                        )}>
                        </Route>
                        <Route exact path="/buy" render={() => (
                            <Buy />
                        )}>
                        </Route>
                        <Route exact path="/discount" render={() => (
                            <Discount />
                        )}>
                        </Route>
                    </Switch>
                    <Footer />
                </BRouter>
            </Container>
        );
    }
}

export default Router;