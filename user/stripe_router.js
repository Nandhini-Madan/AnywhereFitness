const router = express.Router();

const stripe = require("stripe")(env.process.REACT_APP_SECRET_KEY);

// same api we used in the frondend
router.post("/api/stripe/charge", async (req, resp) => {
  const { token, currency, price } = req.body;
  const charge = await stripe.charges.create({
    amount: price,
    currency,
    source: token,
  });

  if (!charge) throw new Error("charge unsuccessful");
});

module.exports = router;