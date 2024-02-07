import RegisterController from "../src/controllers/RegisterController/RegisterController.js";
import AuthenticationController from "../src/controllers/AuthenticationController/AuthenticationController.js";
import AnimalController from "../src/controllers/AnimalController/AnimalController.js"
import PictureController from "../src/controllers/PictureController/PictureController.js";
import { userExists } from "../src/services/jwtService.js";
import { upload } from "../src/services/multerService.js";

export default (app) => {
     const registerController = new RegisterController();
     const authenticationController = new AuthenticationController();
     const animalController = new AnimalController(); 
     const pictureController = new PictureController();

     app.post('/register', (req, res) => registerController.registerUserProcess(req, res));
     app.post('/login', (req, res) => authenticationController.loginProcess(req, res));
     
     app.use('/api', userExists);

     app.post('/api/animal', (req, res) => animalController.addAnimal(req, res));
     app.get('/api/animals', (req, res) => animalController.getAnimalById(req, res));
     app.get('/api/users', (req, res) => userController.getUserByEmail(req, res));
     app.post('/api/user/picture', upload, (req, res) => pictureController.addUserPictureProcess(req, res));
     app.post('/api/animal/picture', upload, (req, res) => pictureController.addAnimalPictureProcess(req, res));
     app.get('/api/user/pictures', (req, res) => pictureController.getUserPicturesProcess(req, res));
     app.get('/api/animal/pictures', (req, res) => pictureController.getAnimalPicturesProcess(req, res));

};

