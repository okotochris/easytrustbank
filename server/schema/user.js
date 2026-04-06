const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    city:{ type: String, required: true },
    country:{ type: String, required: true },
    currency:{ type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    photo: { type: String },
    accountNumber: { type: String, required: true, unique: true  },
    pin: { type: String, required: true },
    atmCards:[
        {
            cardType: { type: String, required: true },
            cardNumber: { type: String, required: true },
            expiryDate: { type: String, required: true },
            cvv: { type: String, required: true }
        }
    ],
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});