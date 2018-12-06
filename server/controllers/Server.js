require('dotenv').config()
const {STRIPE_SECRET_KEY} = process.env

const stripe = require("stripe")(STRIPE_SECRET_KEY);

module.exports={
   Credit: async (req, res) => {
       try {
         let {status} = await stripe.charges.create({
           amount: 2000,
           currency: "usd",
           description: "An example charge",
           source: req.body.id
         });

         res.json({status});
       } catch (err) {
           console.log("Error with server",err)
         res.status(500).end();
       }
     }
};