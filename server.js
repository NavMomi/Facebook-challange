const express = require('express');
const router = require('./config/router');
const moongoose=require("mongoose");


const app = express();

app.use(express.urlencoded({extended: false}))

console.log('hello');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());

// bring router
app.use(router);
require('./config/mongoose')



app.listen('4000', () => {
    console.log('server is running on port 4000')
})
