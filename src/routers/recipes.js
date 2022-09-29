const express = require('express');
const router = express.Router();

const {getAll} = require('../controllers/recipes')



router.get('/', getAll);


module.exports = router;
