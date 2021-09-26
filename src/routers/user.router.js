const { Router } = require('express');
const { addUser, getTodos } = require('../controllers/user.controller');

const router = Router();

router.post('/', addUser);
router.get('/:id', getTodos);


module.exports = router;