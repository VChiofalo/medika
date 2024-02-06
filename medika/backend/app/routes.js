import RegisterController from "../src/controllers/RegisterController/RegisterController.js";
import AuthenticationController from '../src/controllers/AuthenticationController/AuthenticationController.js';
// import UserController from "../src/controllers/UserController/UserController.js";
import AnimalController from "../src/controllers/AnimalController/AnimalController.js"
import PictureController from "../src/controllers/PictureController/PictureController.js";
import { userExists } from "../src/services/jwtService.js";
import { upload } from "../src/services/multerService.js";

export default (app) => {
     const registerController = new RegisterController();
     const authenticationController = new AuthenticationController();
     const animalController = new AnimalController(); 
     const pictureController = new PictureController();

     app.post('/api/register', (req, res) => registerController.registerUserProcess(req, res));
     app.post('/api/login', (req, res) => authenticationController.loginProcess(req, res));
     app.post('/api/animals', (req, res) => animalController.addAnimal(req, res));
     app.get('/api/animals', (req, res) => animalController.getAnimalById(req, res));
     app.put('/api/animals', (req, res) => animalController.updateAnimalById(req, res));
     app.delete('/api/animals', (req, res) => animalController.deleteAnimalById(req, res));
     app.get('/api/users', (req, res) => userController.getUserByEmail(req, res));
     app.post('/api/add-user-picture', userExists, upload, (req, res) => pictureController.addUserPictureProcess(req, res));
     app.post('/api/add-animal-picture', userExists, upload, (req, res) => pictureController.addAnimalPictureProcess(req, res));
};

