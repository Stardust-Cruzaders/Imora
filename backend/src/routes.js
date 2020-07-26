const express = require('express');
const routes = express.Router();


routes.get('/', (req,res) => {
    return res.json({ oloco: 'oloco bixo'})
});
module.exports = routes;