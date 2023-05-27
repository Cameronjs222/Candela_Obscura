const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema({
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
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
    Nerve: {
        move: { value: { type: Number, default: 0 }, Guilded: { type: Boolean, default: false } },
        strike: { value: { type: Number, default: 0 }, Guilded: { type: Boolean, default: false } },
        control: { value: { type: Number, default: 0 }, Guilded: { type: Boolean, default: false } },
        nerveDrive: {
            value: { type: Number, default: 0, max: 9 },
            maximum: { type: Number, default: 0, max: 9 }
        }
    },
    Cunning: {
        sway: { value: { type: Number, default: 0 }, Guilded: { type: Boolean, default: false } },
        read: { value: { type: Number, default: 0 }, Guilded: { type: Boolean, default: false } },
        hide: { value: { type: Number, default: 0 }, Guilded: { type: Boolean, default: false } },
        cunningDrive: {
            value: { type: Number, default: 0, max: 9 },
            maximum: { type: Number, default: 0, max: 9 }
        }
    },
    Intuition: {
        survey: { value: { type: Number, default: 0 }, Guilded: { type: Boolean, default: false } },
        focus: { value: { type: Number, default: 0 }, Guilded: { type: Boolean, default: false } },
        sense: { value: { type: Number, default: 0 }, Guilded: { type: Boolean, default: false } },
        intuitionDrive: {
            value: { type: Number, default: 0, max: 9 },
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
        maxlength: [10, "Specialty must be 10 characters or less"],
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
                message: "You cannot have more than 3 Illumination Keys",
            },
            {
                validator: function (keys) {
                    return keys.every((key) => key.length >= 5 && key.length <= 30);
                },
                message: "Each Illumination key must be between 5 and 30 characters long.",
            },
        ],
    },
    Marks: {
        body: { value: { type: Number, default: 0, max: 3 } },
        brain: { value: { type: Number, default: 0, max: 3 } },
        bleed: { value: { type: Number, default: 0, max: 3 } }
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
}, { timestamps: true });

module.exports = mongoose.model('Character', CharacterSchema);
