const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requiredir = require('require-dir');   
//inicio do app
const app = express();
app.use(express.json());
app.use(cors());

//iniciar banco
mongoose.connect("mongodb://localhost:27017/nodeapi", 
{
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

requiredir('./src/models');
 
//Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);