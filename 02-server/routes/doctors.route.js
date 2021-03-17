/*
    Ruta: /api/doctors
*/
const { Router } = require('express');

const { 
    getDoctors, 
    createDoctor, 
    updateDoctor, 
    deleteDoctor 
} =  require('../controllers/doctors.controller');

const { check } = require('express-validator');
const { fieldsValidator } = require('../middlewares/fields-validator');
const { JWTValidator } = require('../middlewares/jwt-validation');

const router =  Router();

router.get( '/', getDoctors);

router.post( '/',   
    [
        JWTValidator,
        check('name', 'Name is mandatory').not().notEmpty(),
        check('hospital', 'Hospital id must be a mongo id').isMongoId(),
        fieldsValidator
    ],
    createDoctor
);

router.put( '/:id',     
    [],
    updateDoctor
);

router.delete( '/:id', deleteDoctor);

module.exports = router;