
const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const usersController = require('../controllers/Connexion');


router.get('/profile', usersController.getUserProfile);

module.exports = router;

const express = require('express');
const router = express.Router();
const animalsController = require('../controllers/animalsController');

router.get('/my-animals', animalsController.getUserAnimals);

router.post('/new-animal', animalsController.addNewAnimal);

module.exports = router;

const express = require('express');
const router = express.Router();
const weightsController = require('../controllers/weightsController');

router.post('/update-weight', weightsController.updateAnimalWeight);

module.exports = router;

const express = require('express');
const app = express();
const usersRoutes = require('./routes/users');
const animalsRoutes = require('./routes/animals');
const weightsRoutes = require('./routes/weights');

app.use('/users', usersRoutes);
app.use('/animals', animalsRoutes);
app.use('/weights', weightsRoutes);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
