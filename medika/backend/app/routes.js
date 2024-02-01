
import RegisterController from "../src/controllers/RegisterController/RegisterController.js"

export default (app) => {
     app.post('/register', (req, res)=>{
          const registerController = new RegisterController();
          registerController.registerUserProcess(req, res);
     });
}

/*const express = require('express');
const router = express.Router();
const ConnectionController = require('../src/controllers/ConnectionController/ConnectionController);
const ConnectionController = new ConnectionController();

router.get('/', (req, res) => res.redirect('/auth'));

router.get('/')

router.get('/auth', ConnectionController.get.bind(ConnectionController));
router.post('/auth', ConnectionController.post.bind(ConnectionController));

module.exports = router;*/

