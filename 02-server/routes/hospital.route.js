/*
    Ruta: /api/hospital
*/
const { Router } = require('express');

const { 
    getHospitals, 
    createHospital, 
    updateHospital, 
    deleteHospital 
} =  require('../controllers/hospital.controller');

const { check } = require('express-validator');
const { fieldsValidator } = require('../middlewares/fields-validator');
const { JWTValidator } = require('../middlewares/jwt-validation');

const router =  Router();

router.get( '/', getHospitals);

router.post( '/',   
    [
        JWTValidator,
        check('name', 'Hospital name  is necesary').not().notEmpty(),
        fieldsValidator
    ],
    createHospital
);

router.put( '/:id',     
    [],
    updateHospital
);

router.delete( '/:id', deleteHospital);

module.exports = router;