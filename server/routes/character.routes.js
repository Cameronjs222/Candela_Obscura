const CharactersController = require('../controllers/characters.controller');



module.exports = app => {

app.get("/api/characters/all", CharactersController.findAllCharacters);

app.post("/api/character/add", CharactersController.createNewCharacter);

app.get("/api/character/:_id", CharactersController.findOneSingleCharacter);

app.get("/api/characters/:User_id", CharactersController.findAllUsersCharacters)

app.patch("/api/character/:_id", CharactersController.updateExistingCharacter);

app.delete("/api/character/:_id", CharactersController.deleteAnExistingCharacter);

};