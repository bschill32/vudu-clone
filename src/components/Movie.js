import React, {Component} from 'react'
import axios from 'axios'
import {getCart} from '../ducks/reducer'
import {connect} from 'react-redux'

class Movie extends Component {

    addToCart = (id) => {
        axios.post(`/api/cart/${id}`).then(results => {
            this.props.getCart(results.data)
        })
    }

    render() {
        let {title, rating, image, price, id} = this.props.movie
        return (
            <div>
                <img width = "185px" height = "278px" src={image} alt=""/>
                <h3>{title}</h3>
                <p>{rating}</p>
                <p>${price}</p>
                <button onClick={() => this.addToCart(id)}>Add To Cart</button>
            </div>
        )
    }
}

export default connect(null, {getCart})(Movie)