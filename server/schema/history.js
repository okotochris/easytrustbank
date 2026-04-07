const mongoose = require('mongoose');
const historySchema = new mongoose.Schema({
    email: { type: String, required: true },
    date: { type: Date, required: true },
    description: { type: String, required: true },
    amount: { type: Number, required: true },
    userAccountNumber: { type: String, required: true },
    username: { type: String, required: true },
    type: { type: String, required: true },
    title: { type: String, required: true },
    time: { type: String, required: true },
    status: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});
module.exports = mongoose.model('History', historySchema);