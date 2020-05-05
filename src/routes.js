const { Router } = require('express')

const MonoclonalController = require('./controllers/MonoclonalController');


const routes = Router()



routes.post('/monoclonal', MonoclonalController.create);
routes.get('/monoclonal', MonoclonalController.index);



module.exports = routes;