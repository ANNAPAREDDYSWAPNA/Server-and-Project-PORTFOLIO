const express = require('express');
const Router = express.Router();

const ProjectController = require('../controllers/ProjectController')

//Server Routes
Router.post('/api/add-project',ProjectController.addProject);
Router.get('/api/get-project',ProjectController.getProject);
Router.delete('/api/delete-project/:id', ProjectController.deleteProject);
Router.put('/api/update-project/:id', ProjectController.updateProject);
module.exports = Router;