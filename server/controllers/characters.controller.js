const Characters = require('../models/characters.model');



module.exports.findAllCharacters = (req, res) => {

    Characters.find()

        .then((allCharacters) => {

            res.json(allCharacters)

        })

        .catch((err) => {

            res.json({ message: 'Something went wrong', error: err })

        });

}
module.exports.findAllUsersCharacters = (req, res) => {

    console.log(req.params.User)

    Characters.find({User: req.params.User_id})

        .then((allCharacters) => {

            res.json(allCharacters)

        })

        .catch((err) => {

            res.json({ message: 'Something went wrong', error: err })

        });

}



module.exports.findOneSingleCharacter= (req, res) => { //need to create system to find characters based on their own id as well as their user's id

    console.log(req.params)

    Characters.findOne({ _id: req.params })

        .then(oneSingleCharacter => {

            res.json(oneSingleCharacter)

        })

        .catch((err) => {

            res.json({ message: 'Something went wrong', error: err })

        });
}



module.exports.createNewCharacter = (req, res) => {

    console.log(req.body)

    Characters.create(req.body)

        .then((newlyCreateCharacter) =>

            res.json(newlyCreateCharacter)

        )

        .catch((err) => {

            res.json({ message: 'Something went wrong', error: err })

        });
}



module.exports.updateExistingCharacter = (req, res) => {

    Characters.findOneAndUpdate(

        { _id: req.params },

        req.body,

        { new: true, runValidators: true }

    )

        .then(updatedCharacter => {

            res.json(updatedCharacter)

        })

        .catch((err) => {

            res.status(400).json({ message: 'Something went wrong', error: err })

        });
}



module.exports.deleteAnExistingCharacter = (req, res) => {

    Characters.deleteOne({ _id: req.params })

        .then(result => {

            res.json({ result: result })

        })

        .catch((err) => {

            res.json({ message: 'Something went wrong', error: err })

        });
}
