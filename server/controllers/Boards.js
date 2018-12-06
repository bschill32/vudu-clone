module.exports = {
    getBoards: (req, res) => {
        const db = req.app.get('db')
        db.get_boards().then(boards => {
            res.status(200).send(boards)
        })
    },

    getCart: (req, res) => {
        const db = req.app.get('db')
        db.get_cart().then(cart => {
            res.status(200).send(cart)
        })
    },

    addToCart: (req, res) => {
        const db = req.app.get('db')
        let {id} = req.params
        db.get_cart().then(cart => {
            let index = cart.findIndex(d => d.id === +id)
            if(index === -1) {
                db.add_to_cart(id).then(cart => {
                    res.status(200).send(cart)
                })
            } else {
                let quantity = cart[index].quantity + 1
                db.update_quantity(id, quantity).then(cart => {
                    res.status(200).send(cart)
                })
            }
        })
    },

    updateQuantity: (req, res) => {
        const db = req.app.get('db')
        let {id} = req.params
        let {quantity} = req.query
        if(quantity) {
            if(+quantity === 0) {
                db.delete_board(id).then(cart => {
                    res.status(200).send(cart)
                })
            } else {
                db.update_quantity(id, quantity).then(cart => {
                    res.status(200).send(cart)
                })
            }
        } else {
            res.status(500).send("Quantity isn't working")
        }
    },

    deleteBoard: (req, res) => {
        const db = req.app.get('db')
        let {id} = req.params
        db.delete_board(id).then(cart => {
            res.status(200).send(cart)
        })
    },

    checkout: (req, res) => {
        const db = req.app.get('db')
        db.checkout().then(cart => {
            res.status(200).send(cart)
        })
    }




}