const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51J7OgKSJQBJwFnd6JmLLDyUzhDjbtb0Ai6EpXGF5X5E3aemhK8RNUXllv8aQX865uhcm9q9qHm1zB8nEvTHCfYgz00E7zHzMiV"
);

//set up API

//app config
const app = express();

//middleware
app.use(cors({ origin: true }));
app.use(express.json());

//api routes
app.get("/", (req, res) => res.status(200).send("status ok"));
app.post("/payment/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment request recieved ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  // ok -created
  res.status(201).send({
      clientSecret: paymentIntent.client_secret,
  })
});

//listener
exports.api = functions.https.onRequest(app);
