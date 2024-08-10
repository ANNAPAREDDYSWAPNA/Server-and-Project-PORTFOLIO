// routes.js
const express = require('express');
const Router = express.Router();
const multer = require('multer')
const AddDeveloperController = require('../controllers/AddDeveloperController');
const developerImage = multer({dest:"uploads/images/"})
// Route for adding a developer
Router.post('/api/add-developer', developerImage.any(),  AddDeveloperController.addDeveloper);
Router.get('/api/get-developers', developerImage.any(),  AddDeveloperController.getDeveloper);
Router.delete('/api/delete-developer/:id',AddDeveloperController.deleteDeveloper);

module.exports = Router;