const mongoose = require('mongoose');



const UserSchema = new mongoose.Schema({

    UserName: {

        type: String,

        required: [true, "Name is required"],

        minlength: [2, "User name must be at least 3 characters long"],

    },

    Email: {

        type: String,

        required: [true, "Please provide an email"],

        minLength: [2, "Email must be at least 3 characters long"],

        unique: [true, "Store number already in use"]

    },

}, { timestamps: true });



module.exports = mongoose.model('Store', UserSchema);