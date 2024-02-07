import authenticateJWT from "../src/middleware/authenticateJWT.js";
import RegisterController from "../src/controllers/RegisterController/RegisterController.js";
import AuthenticationController from '../src/controllers/AuthenticationController/AuthenticationController.js';
import AnimalController from "../src/controllers/AnimalController/AnimalController.js"
import PictureController from "../src/controllers/PictureController/PictureController.js";
import SpeciesController from "../src/controllers/SpeciesController/SpeciesController.js";
import BreedController from "../src/controllers/BreedController/BreedController.js";
import { userExists } from "../src/services/jwtService.js";
import { upload } from "../src/services/multerService.js";

export default (app) => {
     const registerController = new RegisterController();
     const authenticationController = new AuthenticationController();
     const animalController = new AnimalController(); 
     const pictureController = new PictureController();
     const speciesController = new SpeciesController();
     const breedController = new BreedController();

     app.post('/register', (req, res) => registerController.registerUserProcess(req, res));
     app.post('/login', (req, res) => authenticationController.loginProcess(req, res));
     
     app.use('/api', userExists);
     
     app.get('/api/species', (req, res) => speciesController.getAllSpeciesProcces(req, res));
     app.get('/api/breeds', (req, res) => breedController.getBreedProccess(req, res));
     app.post('/api/animals', (req, res) => animalController.addAnimal(req, res));
     app.get('/api/animals', (req, res) => animalController.getAnimalById(req, res));
     app.put('/api/animals', (req, res) => animalController.updateAnimalById(req, res));
     app.delete('/api/animals', (req, res) => animalController.deleteAnimalById(req, res));
     app.get('/api/users', (req, res) => userController.getUserByEmail(req, res));
     app.post('/api/user/picture', upload, (req, res) => pictureController.addUserPictureProcess(req, res));
     app.post('/api/animal/picture', upload, (req, res) => pictureController.addAnimalPictureProcess(req, res));
     app.get('/api/user/pictures', (req, res) => pictureController.getUserPicturesProcess(req, res));
     app.get('/api/animal/pictures', (req, res) => pictureController.getAnimalPicturesProcess(req, res));

};

