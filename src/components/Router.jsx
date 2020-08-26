import React, { Component } from 'react';
import { BrowserRouter as BRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components' 

//Components
import Header from './Header'
import Navbar from './Navbar'
import Products from './Products/Products'
import Footer from './Footer'
import Buy from './Buy'
import Discount from './Discounts/Discount'

class Router extends Component {
    constructor(props){
        super(props)
        this.state = {
            products: [
                {id: 1, src: "https://i.ibb.co/r02btq9/003.png", name: "Dragon", price: 50, discount: true, type: 1},
                {id: 2, src: "assets/006.png", name: "Sapo", price: 100, discount: true, type: 2},
                {id: 3, src: "assets/009.png", name: "Tortuga", price: 550, discount: false, type: 0},
                {id: 4, src: "assets/015.png", name: "Abeja", price: 510, discount: false, type: 0},
                {id: 5, src: "assets/031.png", name: "Dino", price: 505, discount: false, type: 0},
                {id: 6, src: "assets/034.png", name: "Rata", price: 570, discount: false, type: 0},
            ],
            purchase: []
        }
    }

    get_count = id => this.state.purchase.find(product => product.id === id )

    add_product_state = data => {
        let { id } = data //Get ID.
        let compra = [...this.state.purchase]
        let validation = compra.findIndex(p => p.id === id)
        if (validation >= 0){
          if (compra[validation].cantidad === 5) console.log("Alert: limite excedido!")  
          else compra[validation].cantidad++
        }
        else compra = [...compra, {
            id,
            cantidad: 1
        }]
        return this.setState({
            purchase: compra
        })
    }

    del_product_state = data => {
        let { id } = data //Get ID.
        let compra = [...this.state.purchase]
        let validation = compra.findIndex(p => p.id === id)
        if (validation >= 0){
          if (compra[validation].cantidad === 0) console.log("Alert: Producto inexistente")
          else compra[validation].cantidad--  
        } 
        else compra = [...compra, {
            id,
            cantidad: 1
        }]
        return this.setState({
            purchase: compra
        })
    }

    render() {
        let { products, purchase } = this.state

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
                                        products,
                                        purchase
                                    }}
                                    addProduct={this.add_product_state}
                                    delProduct={this.del_product_state}
                                    get_count={this.get_count}
                                />
                            </>
                        )}>
                        </Route>
                        <Route exact path="/buy" render={() => (
                            <Buy />
                        )}>
                        </Route>
                        <Route exact path="/discount" render={() => (
                            <Discount 
                                {...{
                                    products
                                }}
                            />
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