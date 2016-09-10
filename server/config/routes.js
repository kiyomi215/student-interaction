var express = require('express');
var router = express.Router();
var handlers = require('../config/handlers.js');

router.get('/', handlers.getAllStudents);
router.get('/:id', handlers.getOneStudent);
router.post('/', handlers.addOneStudent);
router.put('/:id', handlers.updateOneStudent);
router.delete('/:id', handlers.deleteOneStudent);

module.exports = router;