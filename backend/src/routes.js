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

routes.get('/users', usersController.index);
routes.post('/users', usersController.create);
routes.put('/users', usersController.update);
routes.delete('/users', usersController.delete);

routes.get('/:id/residences', residencesController.index);
routes.post('/:id/residences', residencesController.create);

routes.get('/residencesType', residenceTypeController.index);
routes.post('/residencesType',residenceTypeController.create);
routes.put('/residencesType', residenceTypeController.update);
routes.delete('/residencesType', residenceTypeController.delete);

routes.get('/residencesPlace', residencePlaceController.index);
routes.post('/residencesPlace',residencePlaceController.create);
module.exports = routes;