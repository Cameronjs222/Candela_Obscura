const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    Creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    ItemName: {
        type: String,
        required: [true, "Item name is required"],
    },
    ItemDescription: {
        type: String,
        required: [true, "Item description is required"],
    },
    ItemInUse: {
        type: Boolean,
        default: false,
    },
    Users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
}, { timestamps: true });

module.exports = mongoose.model('Item', ItemSchema);