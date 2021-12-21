const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.REACT_APP_SECRET_KEY);

// same api we used in the frondend
router.post("/charge", async (req, resp) => {
  console.log("chargers",req.body)
  const { token, currency, price } = req.body;
  const charge = await stripe.charges.create({
    amount: price,
    currency,
    source: token,
  });
  /*
  charge.then((result)=>{
    resp.status(200).json({message:"Succesfully payed"})
  })
  .catch((err)=>{
    resp.status(500).json({message:"Please try again",err})
  })
  */

  if (!charge) throw new Error("charge unsuccessful");

});

module.exports = router;