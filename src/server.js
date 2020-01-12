const express = require('express');
const routes = require('./routes');

const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://achemeuga:achemeuga@clusterapi-ixfe9.mongodb.net/achemeuga?retryWrites=true&w=majority',
{useNewUrlParser:true,
useUnifiedTopology:true});

app.use(express.json());
app.use(routes);

app.listen(3000);



//req.query - Acessar query params para filtros
//req.params - Acessar route params - para edição e exclusão
//req.body - Acessar a body params para criacao e edicao
