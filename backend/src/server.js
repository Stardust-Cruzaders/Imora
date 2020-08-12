const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(routes);
app.use(express.json());

app.use(cors);

app.listen(process.env.PORT || 3333, () => {
    console.log('Server Listening');
});