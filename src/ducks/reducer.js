let initialState =  {
    boards: [],
    cart: []
}

const GET_BOARDS = 'GET_BOARDS'
const GET_CART = 'GET_CART'

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_BOARDS:
            return Object.assign({}, state, {boards: action.payload})
        case GET_CART:
            return {...state, cart: action.payload}
        default:
            return state
    }
}

export function getBoards(boards) {
    return {
        type: GET_BOARDS,
        payload: boards
    }
}

export function getCart(cart) {
    return {
        type: GET_CART,
        payload: cart
    }
}