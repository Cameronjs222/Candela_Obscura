const { model } = require('mongoose');
const Users = require('../models/users.model');



module.exports.findAllUsers = (req, res) => {

    Users.find()

        .then((allUsers) => {

            res.json(allUsers)

        })

        .catch((err) => {

            res.json({ message: 'Something went wrong', error: err })

        });

}



module.exports.findOneSingleUser = (req, res) => {

    Users.findOne({ _id: req.params })

        .then(oneSingleUser => {

            res.json(oneSingleUser)

        })

        .catch((err) => {

            res.json({ message: 'Something went wrong', error: err })

        });
}



module.exports.createNewUser = (req, res) => {

    Users.create(req.body)

        .then((newlyCreatedUser) =>

            res.json(newlyCreatedUser)

        )

        .catch((err) => {

            res.json({ message: 'Something went wrong', error: err })

        });
}



module.exports.updateExistingUser = (req, res) => {

    Users.findOneAndUpdate(

        { _id: req.params },

        req.body,

        { new: true, runValidators: true }

    )

        .then(updatedUser => {

            res.json(updatedUser)

        })

        .catch((err) => {

            res.json({ message: 'Something went wrong', error: err })

        });
}



module.exports.deleteAnExistingUser = (req, res) => {

    Users.deleteOne({ _id: req.params })

        .then(result => {

            res.json({ result: result })

        })

        .catch((err) => {

            res.json({ message: 'Something went wrong', error: err })

        });
}

model.exports.findUserByEmail = (req, res) => {
    Users.findOne({ email: req.params.email })
        .then(user => {
            res.json(user)
        })
        .catch(err => {
            res.json({ message: 'Something went wrong', error: err })
        })
}