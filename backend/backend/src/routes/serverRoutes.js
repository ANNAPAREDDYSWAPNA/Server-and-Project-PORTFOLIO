const express = require('express');
const Router = express.Router();

const ServerController = require('../controllers/ServerController')

//Server Routes
Router.post('/api/add-server',ServerController.addServer);
Router.get('/api/get-server',ServerController.getServer);
Router.delete('/api/delete-server/:id', ServerController.deleteServer);
Router.put('/api/update-server/:id', ServerController.updateServer);
Router.get('/api/get-storage1',ServerController.getStorage);
Router.get('/api/get-ram1',ServerController.getRam);



//server1
const ServerController1 = require('../controllers/ServerController1')
//Server Routes
Router.post('/api/add-server1',ServerController1.addServer1);
Router.get('/api/get-server1',ServerController1.getServer1);
Router.delete('/api/delete-server1/:id', ServerController1.deleteServer1);
Router.put('/api/update-server1/:id', ServerController1.updateServer1);
Router.get('/api/get-storage2',ServerController1.getStorage1);
Router.get('/api/get-ram2',ServerController1.getRam1);

module.exports = Router;