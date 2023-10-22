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

        // unique: [true, "Email is already in use"]

    },

    Password: {

        type: String,

        required: [true, "Please provide a password"],

        minLength: [2, "Password must be at least 3 characters long"]

    },

}, { timestamps: true });



module.exports = mongoose.model('Store', UserSchema);