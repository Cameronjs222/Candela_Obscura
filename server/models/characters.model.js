const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema({
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    Name: {
        type: String,
        required: [true, "Character name is required"],
    },
    Stats: {
        Strength: { type: Number, default: 0 },
        Dexterity: { type: Number, default: 0 },
        // Add more stats as needed
    },
}, { timestamps: true });

module.exports = mongoose.model('Character', CharacterSchema);
