const express = require('express');
const router = express.Router();
const ConnectionController = require('../src/controllers/ConnectionController/ConnectionController);
const ConnectionController = new ConnectionController();

router.get('/', (req, res) => res.redirect('/auth'));

router.get('/')

router.get('/auth', ConnectionController.get.bind(ConnectionController));
router.post('/auth', ConnectionController.post.bind(ConnectionController));

module.exports = router;
