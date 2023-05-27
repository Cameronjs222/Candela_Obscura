const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema({
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    Name: {
        type: String,
        Max: [35, "Please keep your character name to under 35 characters"],
        required: [true, "Character name is required"],
    },

    Pronouns: {
        type: String,
        max: [35, "Please keep pronouns to under 35 characters."]
    },

    Circle: {
        type: String,
        max: [70, "please keep the name of your circle to under 70 characters"]
    },

    Style: {
        type: String,
        max: [250, "Please keep your style to under 250 characters"]
    },

    Catalyst: {
        type: String,
        max: [250, "Please keep your Catalyst to under 250 characters"]
    },

    Question: {
        type: String,
        max: [250, "Please keep your question to under 250 characters"]
    },

    Nerve: {
        move: { type: { type: Number, default: 0 }, Guilded: { type: Boolean, default: false } },
        strike: { type: { type: Number, default: 0 }, Guilded: { type: Boolean, default: false } },
        control: { type: { type: Number, default: 0 }, Guilded: { type: Boolean, default: false } },
        nerveDrive: {
            type: { type: Number, default: 0, max: 9 },
            maximum: { type: Number, default: 0, max: 9 }
        }
    },
    Cunning: {
        sway: { type: { type: Number, default: 0 }, Guilded: { type: Boolean, default: false } },
        read: { type: { type: Number, default: 0 }, Guilded: { type: Boolean, default: false } },
        hide: { type: { type: Number, default: 0 }, Guilded: { type: Boolean, default: false } },
        cunningDrive: {
            type: { type: Number, default: 0, max: 9 },
            maximum: { type: Number, default: 0, max: 9 }
        }
    },
    Intuition: {
        survey: { type: { type: Number, default: 0 }, Guilded: { type: Boolean, default: false } },
        focus: { type: { type: Number, default: 0 }, Guilded: { type: Boolean, default: false } },
        sense: { type: { type: Number, default: 0 }, Guilded: { type: Boolean, default: false } },
        intuitionDrive: {
            type: { type: Number, default: 0, max: 9 },
            maximum: { type: Number, default: 0, max: 9 }
        }
    },
    Role: {
        type: String,
        required: true,
        enum: ["Slink", "Scholar", "Face", "Weird", "Muscle"],
        abilities: [
            {
                name: { type: String, required: true },
                description: { type: String, required: true },
            },
        ],
    },
    Specialty: {
        type: String,
        required: true,
        maxLength: 10,
        abilities: [
            {
                name: { type: String, required: true },
                description: { type: String, required: true },
            },
        ],
    },
    IlluminationKeys: {
        type: [String],
        validate: [
            {
                validator: function (keys) {
                    return keys.length < 4;
                },
                message: "You can not have more than 3 Illumination Keys",
            },
            {
                validator: function (keys) {
                    return keys.every((key) => key.length >= 5 && key.length <= 30);
                },
                message: "Each illumination key must be between 5 and 30 characters long.",
            },
        ],
    },
    Marks: {
        body: {type: Number, default: 0, max: 3},
        brain: {type: Number, default: 0, max: 3},
        bleed: {type: Number, default: 0, max: 3}
    },
    Scars: {
        type: [String],
        validation: {
            validator: function(strings) {
                return strings.every((string) => key.length >= 0 && key.length <= 250)
            }
        }
    },
    Relationships: {
        type: [String],
        validation: {
            validator: function(strings) {
                return strings.every((string) => key.length >= 0 && key.length <= 250)
            }
        }
    },

}, { timestamps: true });

module.exports = mongoose.model('Character', CharacterSchema);
