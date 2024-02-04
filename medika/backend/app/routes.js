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
     
     app.post('/api/register', (req, res) => registerController.registerUserProcess(req, res));
     app.post('/api/login', (req, res) => authenticationController.loginProcess(req, res));
     app.post('/api/animals', (req, res) => animalController.addAnimal(req, res));
     app.post('/api/users', (req, res) => userController.addUser(req, res));
     app.get('/api/animals/:id', (req, res) => animalController.getAnimalById(req, res));
     app.put('/api/animals/:id', (req, res) => animalController.updateAnimalById(req, res));
     app.delete('/api/animals/:id', (req, res) => animalController.deleteAnimalById(req, res));
     app.get('/api/users', (req, res) => userController.getAllUsers(req, res));
     app.get('/api/users/:id', (req, res) => userController.getUserById(req, res));
     app.put('/api/users/:id', (req, res) => userController.updateUserById(req, res));
     app.delete('/api/users/:id', (req, res) => userController.deleteUserById(req, res));
};
