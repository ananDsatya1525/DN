const express = require('express');
const bodyParser = require('body-parser');
const Razorpay = require('razorpay');

const app = express();
app.use(bodyParser.json());

const razorpay = new Razorpay({
    key_id: 'YOUR_RAZORPAY_KEY_ID',
    key_secret: 'YOUR_RAZORPAY_KEY_SECRET'
});

app.post('/create-order', async (req, res) => {
    const { amount, currency } = req.body;

    try {
        const options = {
            amount: amount,  // amount in paise
            currency: currency,
            receipt: `receipt_${Math.random()}`,
        };
        const order = await razorpay.orders.create(options);
        res.json(order);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
