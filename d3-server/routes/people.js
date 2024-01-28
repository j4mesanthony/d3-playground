const express = require('express');
const router = express.Router();
const controller = require('../controllers/peopleController');
const { Person } = require('../models');
const { addOrEdit, get, getById } = controller(Person);

router.get('/', get);
router.get('/:id', getById);
router.post('/addOrEdit', addOrEdit);

module.exports = router;