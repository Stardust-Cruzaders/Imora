const express = require('express');

const UsersController = require('./controllers/UsersController');
const ResidencesController = require('./controllers/ResidencesController');

const residencesController = new ResidencesController();
const usersController = new UsersController();

const routes = express.Router();

routes.get('/', (req,res) => {
    return res.json({ OwO: 'UwU'});
});

routes.get('/users', usersController.index);
routes.post('/users', usersController.create);

routes.get('/:id/residences', residencesController.index);
routes.post('/:id/residences', residencesController.create);
module.exports = routes;