const express = require('express');
//const multer = require('multer');
//const uploadConfig = require('./config/upload');

const AtividadeController = require('./controllers/AtividadeController');

const routes = express.Router();
//const upload = multer(uploadConfig);

routes.get('/',(req,res) =>{
    return res.json({message:'workando'});
});

routes.post('/atividades',AtividadeController.store);

routes.get('/atividades',AtividadeController.index);

module.exports = routes;