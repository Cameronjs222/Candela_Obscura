const CharactersController = require('../controllers/characters.controller');

  

module.exports = app => {

app.get("/api/characters", CharactersController.findAllCharacters);

app.post("/api/characters", CharactersController.createNewCharacter);

app.get("/api/characters/:_id", CharactersController.findOneSingleCharacter);

app.patch("/api/characters/:_id", CharactersController.updateExistingCharacter);

app.delete("/api/characters/:_id", CharactersController.deleteAnExistingCharacter);

};