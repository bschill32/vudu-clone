import React, {Component} from 'react'
import axios from 'axios'
import {getCart} from '../ducks/reducer'
import {connect} from 'react-redux'

class Board extends Component {

    addToCart = (id) => {
        axios.post(`/api/cart/${id}`).then(results => {
            this.props.getCart(results.data)
        })
    }

    render() {
        let {name, dim, image, price, id} = this.props.board
        return (
            <div className='board-space'>
                <img class='board-zoom' width = "191px" height = "293px" src={image} alt=""/>
                <div className='board-box'>
                    <h3 className="board-name">{name}</h3>
                    <p>{dim}</p>
                    <p>${price}</p>
                    <button onClick={() => this.addToCart(id)}>Add To Cart</button>
                </div>
            </div>
        )
    }
}

export default connect(null, {getCart})(Board)