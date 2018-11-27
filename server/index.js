require('dotenv').config()

const express = require('express')
    , session = require('express-session')
    , massive = require('massive')
    , bodyParser = require('body-parser')
    , AuthCtrl = require('./controllers/Auth')
    , MovieCtrl = require('./controllers/Movies')

const app = express();

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log("db is Working!")
})

app.use(bodyParser.json())
// app.use(session({
//     secret: SESSION_SECRET,
//     resave: true,//Possibly false
//     saveUninitialized: false
// }))

app.get('/api/movies', MovieCtrl.getMovies)

app.get('/api/cart', MovieCtrl.getCart)
app.post('/api/cart/:id', MovieCtrl.addToCart)
app.put('/api/cart/:id', MovieCtrl.updateQuantity)
app.delete('/api/cart/checkout', MovieCtrl.checkout)
app.delete('/api/cart/:id', MovieCtrl.deleteMovie)

app.listen(SERVER_PORT, () => console.log('When in doubt just delete it.....', SERVER_PORT))








