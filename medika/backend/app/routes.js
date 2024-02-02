import express from 'express';
import pool from '../app/database_sql.js';

import ConnectionController from "../src/controllers/AuthenticationController/AuthenticationController.js";

import RegisterController from "../src/controllers/RegisterController/RegisterController.js";
import AuthenticationController from '../src/controllers/AuthenticationController/AuthenticationController.js';
import UserController from "../src/controllers/UserController/UserController.js";
import UserRepository from "../src/repositories/UserRepository.js";
import AnimalController from "../src/controllers/AnimalController/AnimalController.js"
import AnimalRepository from "../src/repositories/AnimalRepository.js";

export default (app) => {
     const registerController = new RegisterController();
     const authenticationController = new AuthenticationController();
     const animalRepository = new AnimalRepository(pool.promise());
     const animalController = new AnimalController(animalRepository); 
     const userRepository = new UserRepository(pool.promise());
     const userController = new UserController(userRepository);
     
     app.post('/register', (req, res) => registerController.registerUserProcess(req, res));
     app.post('/login', (req, res) => authenticationController.loginProcess(req, res));
     app.post('/animals', (req, res) => animalController.addAnimal(req, res));
     app.post('/users', (req, res) => userController.addUser(req, res));
     app.get('/animals/:id', (req, res) => animalController.getAnimalById(req, res));
     app.put('/animals/:id', (req, res) => animalController.updateAnimalById(req, res));
     app.delete('/animals/:id', (req, res) => animalController.deleteAnimalById(req, res));
     app.get('/users', (req, res) => userController.getAllUsers(req, res));
     app.get('/users/:id', (req, res) => userController.getUserById(req, res));
     app.put('/users/:id', (req, res) => userController.updateUserById(req, res));
     app.delete('/users/:id', (req, res) => userController.deleteUserById(req, res));

};
/*const express = require('express');
const router = express.Router();
const ConnectionController = require('../src/controllers/ConnectionController/ConnectionController);
const ConnectionController = new ConnectionController();

router.get('/', (req, res) => res.redirect('/auth'));

router.get('/')

router.get('/auth', ConnectionController.get.bind(ConnectionController));
router.post('/auth', ConnectionController.post.bind(ConnectionController));

module.exports = router;*/

