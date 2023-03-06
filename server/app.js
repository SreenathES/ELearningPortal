const express = require('express');
require('dotenv').config();

const app = express();

app.use('/', (req, res) => {
    res.send('myLearn');
});

app.listen(process.env.DEV_PORT);