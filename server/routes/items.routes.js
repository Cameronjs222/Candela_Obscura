const ItemController = require('../controllers/items.controller');

module.exports = app => {
    
        app.get("/api/items/all", ItemController.findAllItems);
    
        app.post("/api/item/add", ItemController.createNewItem);
    
        app.get("/api/item/:_id", ItemController.findOneSingleItem);
    
        app.patch("/api/item/:_id", ItemController.updateExistingItem);
    
        app.delete("/api/item/:_id", ItemController.deleteAnExistingItem);
    
    }
