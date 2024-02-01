import RegisterController from "../src/controllers/RegisterController/RegisterController.js"

export default (app) => {
     app.post('/register', (req, res)=>{
          const registerController = new RegisterController();
          registerController.registerUserProcess(req, res);
     });
}