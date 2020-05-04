const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const MonoclonalController = require('./controllers/MonoclonalController');



const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/monoclonal', MonoclonalController.create);



module.exports = routes;