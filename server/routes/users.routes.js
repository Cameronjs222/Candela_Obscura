const UsersController = require('../controllers/users.controller');

  

module.exports = app => {

app.get("/api/users", UsersController.findAllUsers);

app.post("/api/users", UsersController.createNewUser);

app.get("/api/users/:_id", UsersController.findOneSingleUser);

app.patch("/api/users/:_id", UsersController.updateExistingUser);

app.delete("/api/users/:_id", UsersController.deleteAnExistingUser);

// app.get("/api/users/email/:email", UsersController.findUserByEmail);

};