/*
    Ruta: /api/users
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { getUsers, createUser, updateUser, deleteUser } =  require('../controllers/users.controller');
const { fieldsValidator } = require('../middlewares/fields-validator');
const { JWTValidator } = require('../middlewares/jwt-validation');

const router =  Router();

router.get( '/', JWTValidator, getUsers);

router.post( '/',   
    [
        check('name', 'Name  is mandatory').not().isEmpty(),
        check('password', 'Password is mandatory').not().isEmpty(),
        check('email', 'Email is mandatory').isEmail(),
        fieldsValidator
    ],
    createUser
);

router.put( '/:id',     
    [
        JWTValidator,
        check('name', 'Name  is mandatory').not().isEmpty(),
        check('password', 'Password is mandatory').not().isEmpty(),
        check('role', 'Role is mandatory').not().isEmpty(),
        fieldsValidator
    ],
    updateUser
);

router.delete( '/:id', JWTValidator, deleteUser);

module.exports = router;