/**
 * Path: 'api/login'
 */

const { Router } = require('express');
const { check } = require('express-validator');

const { login } = require('../controllers/auth.controller');
const { fieldsValidator } = require('../middlewares/fields-validator');

const router =  Router();

router.post('/', [
    check('email',  'Email is mandatory').isEmail(),
    check('password',  'Password is mandatory').not().notEmpty(),
    fieldsValidator
], login)

module.exports = router;