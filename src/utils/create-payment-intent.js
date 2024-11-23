import Stripe from "stripe";

const stripe = new Stripe("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const paymentIntent = await stripe.paymentIntents.create({
                amount: req.body.amount,
                currency: "usd",
            });

            res.status(200).json({
                clientSecret: paymentIntent.client_secret,
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}
