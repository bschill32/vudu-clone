let initialState =  {
    movies: [],
    cart: []
}

const GET_MOVIES = 'GET_MOVIES'
const GET_CART = 'GET_CART'

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_MOVIES:
            return Object.assign({}, state, {movies: action.payload})
        case GET_CART:
            return {...state, cart: action.payload}
        default:
            return state
    }
}

export function getMovies(movies) {
    return {
        type: GET_MOVIES,
        payload: movies
    }
}

export function getCart(cart) {
    return {
        type: GET_CART,
        payload: cart
    }
}