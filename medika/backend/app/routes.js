import homeController from '../src/controllers/homecontroller'
import{get as authControllerGet, post as authControllerPost} from '../src/controllers/authcontroller'   
import{userExists, controlJWT} from '../src/middlewares/jwtService.js';
import { use } from '../src/routes/user';


export default (app) =>{ 
     app.use('/', userExists);
     