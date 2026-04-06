const mongoose = require('mongoose');
const historySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, required: true },
    description: { type: String, required: true },
    amount: { type: Number, required: true },
    userAccountNumber: { type: String, required: true },
    username: { type: String, required: true },
    time: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});
module.exports = mongoose.model('History', historySchema);