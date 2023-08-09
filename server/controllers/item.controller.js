const Items = require('../models/items.model');

module.exports.findAllItems = (req, res) => {

    Items.find()

        .then((allItems) => {

            res.json(allItems)

        })

        .catch((err) => {

            res.json({ message: 'Something went wrong', error: err })

        });

}

module.exports.findOneSingleItem = (req, res) => {

    Items.findOne({ _id: req.params.id })

        .then(oneSingleItem => {

            res.json(oneSingleItem)

        })

        .catch((err) => {

            res.json({ message: 'Something went wrong', error: err })

        });

}

module.exports.createNewItem = (req, res) => {

    Items.create(req.body)

        .then(newlyCreatedItem => {

            res.json(newlyCreatedItem)

        })

        .catch((err) => {

            res.status(400).json({ message: 'Something went wrong', error: err })

        });

}

module.exports.updateExistingItem = (req, res) => {

    Items.findOneAndUpdate(

        { _id: req.params.id },

        req.body,

        { new: true, runValidators: true }

    )

        .then(updatedItem => {

            res.json(updatedItem)

        })

        .catch((err) => {

            res.status(400).json({ message: 'Something went wrong', error: err })

        });

}

module.exports.deleteAnExistingItem = (req, res) => {

    Items.deleteOne({ _id: req.params.id })

        .then((result) => {

            res.json({ result: result })

        })

        .catch((err) => {

            res.json({ message: 'Something went wrong', error: err })

        });

}

module.exports.addUserToItem = (req, res) => {

    Items.findOneAndUpdate(

        { _id: req.params.itemId },

        { $push: { Users: req.params.userId } },

        { new: true, runValidators: true }

    )

        .then((updatedItem) => {

            res.json(updatedItem)

        })

        .catch((err) => {

            res.status(400).json({ message: 'Something went wrong', error: err })

        });

}

module.exports.removeUserFromItem = (req, res) => {

    Items.findOneAndUpdate(

        { _id: req.params.itemId },

        { $pull: { Users: req.params.userId } },

        { new: true, runValidators: true }

    )

        .then((updatedItem) => {

            res.json(updatedItem)

        })

        .catch((err) => {

            res.status(400).json({ message: 'Something went wrong', error: err })

        });

}

// module.exports.updateItemInUse = (req, res) => {
    
//         Items.findOneAndUpdate(
    
//             { _id: req.params.itemId },
    
//             { $set: { ItemInUse: req.params.itemInUse } },
    
//             { new: true, runValidators: true }
    
//         )
    
//             .then((updatedItem) => {
    
//                 res.json(updatedItem)
    
//             })
    
//             .catch((err) => {
    
//                 res.status(400).json({ message: 'Something went wrong', error: err })
    
//             });
    
//     }

