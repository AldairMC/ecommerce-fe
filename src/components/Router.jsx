import React, { Component } from 'react';
import { BrowserRouter as BRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import swal from 'sweetalert'

//Components
import Header from './Header'
import Navbar from './Navbar'
import Products from './Products/Products'
import Footer from './Footer'
import Buy from './Purchase/Buy'
import Discount from './Discounts/Discount'
import Account from './Account'

class Router extends Component {
    constructor(props){
        super(props)
        this.state = {
            image_security: [
                {src: "https://i.ibb.co/9HQCtqT/Perro-2.png", name: "perro_2"},
                {src: "https://i.ibb.co/QHGjqQ6/Perro-1.png", name: "perro_1"},
                {src: "https://i.ibb.co/xMsc65z/Iman-2.png", name: "iman_2"},
                {src: "https://i.ibb.co/wCjcWLG/Iman-1.png", name: "iman_1"},
                {src: "https://i.ibb.co/mq7FDF9/Combo-2.png", name: "combo_2"},
                {src: "https://i.ibb.co/6bjmx4L/Combo-1.png", name: "combo_1"},
                {src: "https://i.ibb.co/fn57qvV/Candado-2.png", name: "candado_2"},
                {src: "https://i.ibb.co/mR3401H/Candado-1.png", name: "candado_1"},
                {src: "https://i.ibb.co/NnkswDg/Bicho-1.png", name: "bicho_1"},
                {src: "https://i.ibb.co/FKfVk3Z/Bicho-2.png", name: "bicho_2"}
            ],
            products: [
                {id: 1, src: "https://i.ibb.co/9HQCtqT/Perro-2.png", name: "Combo 1", price: 50, discount: true, type: 1},
                {id: 2, src: "https://i.ibb.co/QHGjqQ6/Perro-1.png", name: "Combo 2", price: 100, discount: false, type: 0},
                {id: 3, src: "https://i.ibb.co/mq7FDF9/Combo-2.png", name: "Combo 3", price: 550, discount: true, type: 2},
                {id: 4, src: "https://i.ibb.co/6bjmx4L/Combo-1.png", name: "Combo 4", price: 510, discount: false, type: 0},
                {id: 5, src: "https://i.ibb.co/fn57qvV/Candado-2.png", name: "Item 1", price: 505, discount: false, type: 0}
            ],
            purchase: [],
            persona_data: {
                name: "",
                last_name: "",
                email: "",
                address: "",
                document_person: "",
                credit_card: "",
                date_credit_card_ven: "",
                address_cc: "",
                src: "",
                msg: ""
            },
            llave: "persona_data"
        }
    }

    onChangeState = ({target}) => {
        let { name, value} = target
        let { llave } = this.state
        this.setState(prevState => ({
            [llave]: {
                    ...prevState[llave],
                    [name]: value
                }
            })
        )
    }

    get_count = id => this.state.purchase.find(product => product.id === id )

    add_product_state = data => {
        let { id, src, price, name, discount, type } = data //Get ID.
        let compra = [...this.state.purchase]
        let validation = compra.findIndex(p => p.id === id)
        if (validation >= 0){
          if (compra[validation].cantidad === 5) return swal({
            title: "warning",
            text: "Limite alcanzado",
            icon: "info",
            timer: 1000 
        })  
          else {
            compra[validation].cantidad++
            swal({
                title: "Good job!",
                text: "Producto agregado exitosamente!",
                icon: "success",
                timer: 1000 
            })
          } 
        }
        else compra = [...compra, {
            id,
            src, 
            price, 
            name, 
            discount, 
            type,
            cantidad: 1
        }]
        swal({
            title: "Good job!",
            text: "Producto agregado exitosamente!",
            icon: "success",
            timer: 1000 
        })
        return this.setState({
            purchase: compra
        })
    }

    del_product_state = data => {
        let { id, src, price, name, discount, type } = data //Get ID.
        let compra = [...this.state.purchase]
        let validation = compra.findIndex(p => p.id === id)
        if (validation >= 0){
          if (compra[validation].cantidad === 0){
            return swal({
                title: "Info...",
                text: "Canasta vacía",
                icon: "info",
                timer: 1000 
            })
          } else {
                compra[validation].cantidad--
                swal({
                    title: "Info...",
                    text: "Producto eliminado exitosamente!",
                    icon: "info",
                    timer: 1000 
                })
          } 
        } 
        else compra = [...compra, {
            id,
            src, 
            price, 
            name, 
            discount, 
            type,
            cantidad: 1
        }]
        return this.setState({
            purchase: compra
        })
    }

    render() {
        let { products, purchase, persona_data } = this.state

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
                                    description={"List of the products"}
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
                                <Footer />
                            </>
                        )}>
                        </Route>
                        <Route exact path="/buy" render={() => (
                            <>
                                <Buy 
                                    {...{
                                        purchase,
                                        persona_data
                                    }}
                                    empty_purchase={this.empty_purchase}
                                />
                            </>
                        )}>
                        </Route>
                        <Route exact path="/discount" render={() => (
                            <>
                                <Discount 
                                    {...{
                                        products
                                    }}
                                />
                            </>
                            
                        )}>
                        </Route>
                        <Route exact path="/account" render={() => (
                            <>
                                <Account 
                                    {...{
                                        persona_data
                                    }}
                                    onChangeState={this.onChangeState}
                                />
                            </>
                        )}>
                        </Route>
                    </Switch>
                </BRouter>
            </Container>
        );
    }
}

export default Router;