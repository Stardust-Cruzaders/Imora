const express = require('express');

const UsersController = require('./controllers/UsersController');
const ResidencesController = require('./controllers/ResidencesController');
const ResidenceTypeController = require('./controllers/ResidenceTypeController');
const ResidencePlaceController = require('./controllers/ResidencePlaceController');

const usersController = new UsersController();
const residencesController = new ResidencesController();
const residenceTypeController = new ResidenceTypeController();
const residencePlaceController = new ResidencePlaceController();

const routes = express.Router();

routes.get('/', (req,res) => {
    return res.json({ OwO: 'UwU'});
});

//User 
routes.get('/users', usersController.index);
routes.post('/users', usersController.create);
routes.put('/users/:Id', usersController.update);
routes.delete('/users/:Id', usersController.delete);

//Residence 
routes.get('/users/:Id/residences', residencesController.index);
routes.post('/users/:Id/residences', residencesController.create);
routes.put('/users/:Id/residences/:houseId', residencesController.update);
routes.delete('/users/:Id/residences/:houseId', residencesController.delete);

// Residences Type e.g: Chalé, Apartamento, Casa, etc...
routes.get('/residencesType', residenceTypeController.index);
routes.post('/residencesType',residenceTypeController.create);
routes.put('/residencesType', residenceTypeController.update);
routes.delete('/residencesType', residenceTypeController.delete);

// Residences Place e.g: Quarto inteiro, espaço inteiro, quarto compartilhado etc
routes.get('/residencesPlace', residencePlaceController.index);
routes.post('/residencesPlace',residencePlaceController.create);
routes.put('/residencesPlace', residencePlaceController.update);
routes.delete('/residencesPlace', residencePlaceController.delete);

module.exports = routes;