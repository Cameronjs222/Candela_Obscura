const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema({
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    Information: {
        Name: {
            type: String,
            maxlength: [35, "Please keep your character name to under 35 characters"],
            required: [true, "Character name is required"],
        },
        Pronouns: {
            type: String,
            maxlength: [35, "Please keep pronouns to under 35 characters."]
        },
        Circle: {
            type: String,
            maxlength: [70, "Please keep the name of your circle to under 70 characters"]
        },
        Style: {
            type: String,
            maxlength: [250, "Please keep your style to under 250 characters"]
        },
        Catalyst: {
            type: String,
            maxlength: [250, "Please keep your Catalyst to under 250 characters"]
        },
        Question: {
            type: String,
            maxlength: [250, "Please keep your question to under 250 characters"]
        },
    },
    Stats: {
        Nerve: {
            move: { value: { type: Number, default: 0 }, Gilded: { type: Boolean, default: false } },
            strike: { value: { type: Number, default: 0 }, Gilded: { type: Boolean, default: false } },
            control: { value: { type: Number, default: 0 }, Gilded: { type: Boolean, default: false } },
            nerveDrive: {
                value: { type: Number, default: 0, max: 9 },
                maximum: { type: Number, default: 0, max: 9 }
            }
        },
        Cunning: {
            sway: { value: { type: Number, default: 0 }, Gilded: { type: Boolean, default: false } },
            read: { value: { type: Number, default: 0 }, Gilded: { type: Boolean, default: false } },
            hide: { value: { type: Number, default: 0 }, Gilded: { type: Boolean, default: false } },
            cunningDrive: {
                value: { type: Number, default: 0, max: 9 },
                maximum: { type: Number, default: 0, max: 9 }
            }
        },
        Intuition: {
            survey: { value: { type: Number, default: 0 }, Gilded: { type: Boolean, default: false } },
            focus: { value: { type: Number, default: 0 }, Gilded: { type: Boolean, default: false } },
            sense: { value: { type: Number, default: 0 }, Gilded: { type: Boolean, default: false } },
            intuitionDrive: {
                value: { type: Number, default: 0, max: 9 },
                maximum: { type: Number, default: 0, max: 9 }
            }
        },
    },
    Role: {
        title: { type: String, maxlength: [35, "Please keep your role title to under 35 characters"], enum: ["Slink", "Scholar", "Face", "Weird", "Muscle"] },
        abilities: [
            {
                title: { type: String },
                description: { type: String },
            }
        ],
    },
    Specialty: {
        title: { type: String, maxlength: [35, "Please keep your specialty title to under 35 characters"] },
        abilities: [
            {
                title: { type: String, },
                description: { type: String },
            }
        ],
    },
    IlluminationKeys: {
        type: String,
        maxlength: 100
    },
    Marks: {
        body: { type: Number, default: 0, max: 3 },
        brain:{ type: Number, default: 0, max: 3 },
        bleed:{ type: Number, default: 0, max: 3 }
    },
    Scars: {
        type: [String],
        validate: {
            validator: function (strings) {
                return strings.every((string) => string.length >= 0 && string.length <= 250);
            }
        }
    },
    Relationships: {
        type: [String],
        validate: {
            validator: function (strings) {
                return strings.every((string) => string.length >= 0 && string.length <= 250);
            }
        }
    },
    Notes: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model('Character', CharacterSchema);
