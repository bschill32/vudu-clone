import React, {Component} from 'react'
import CartBoard from './CartBoard'
import axios from 'axios'
import {getCart} from '../ducks/reducer'
import {connect} from 'react-redux'
import {Elements, StripeProvider} from 'react-stripe-elements'
import CheckoutForm from './CheckoutForm'

class Cart extends Component {

    componentDidMount() {
        axios.get('/api/cart').then(results => {
            this.props.getCart(results.data)
        })
    }

    checkout = () => {
        if(this.props.cart.length) {
            axios.delete('/api/cart/checkout').then(results => {
                alert('Success!')
                this.props.getCart(results.data)
            })
        } else {
            alert('You need to add something to your Cart!')
        }
    }

    render() {
        let cartTotal = 0
        let cart = this.props.cart.map(e => {
            cartTotal += e.price * e.quantity
            return (
                <CartBoard cartBoard={e} key={e.id}/>
            )
        })
        return (
            <div id='cart'>
                <h1 className='cart-header'>Cart</h1>
                <div className="cart-container">
                    <div className='cart-info'>
                        {cart}
                        <p>Total ${Math.floor(cartTotal * 100) / 100}</p>
                        <button onClick={this.checkout}>Checkout</button>
                    </div>
                    <div className='stripe-container'>
                        <div className='stripe'>
                            <StripeProvider apiKey="pk_test_3LbwziJs8XwqPy2dMzCkyeU0">
                                <div className="example">
                                    <h1>Pay with stripe</h1>
                                    <Elements>
                                        <CheckoutForm />
                                    </Elements>
                                </div>
                            </StripeProvider>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

export default connect (mapStateToProps, {getCart})(Cart)