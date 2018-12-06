require('dotenv').config()

const express = require('express')
    // , session = require('express-session')
    , massive = require('massive')
    , bodyParser = require('body-parser')
    // , AuthCtrl = require('./controllers/Auth')
    , BoardCtrl = require('./controllers/Boards')
    , Server = require('./controllers/Server')
    // , path = require('path');

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

//Boards

app.use( express.static( `${__dirname}/../build` ) );

app.get('/api/boards', BoardCtrl.getBoards)

app.get('/api/cart', BoardCtrl.getCart)
app.post('/api/cart/:id', BoardCtrl.addToCart)
app.put('/api/cart/:id', BoardCtrl.updateQuantity)
app.delete('/api/cart/checkout', BoardCtrl.checkout)
app.delete('/api/cart/:id', BoardCtrl.deleteBoard)

//Server
app.post('/api/charge', Server.Credit)

app.listen(SERVER_PORT, () => console.log('When in doubt just delete it.....', SERVER_PORT))








