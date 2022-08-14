const express = require('express')
require('./model')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./route')(app)

app.listen(3000, ()=> {
    console.log('listening on port 3000');
});