/*
    Ruta: /api/all/:search
*/
const { Router } = require('express');


const { JWTValidator } = require('../middlewares/jwt-validation');

const { 
    getAll
} =  require('../controllers/total-search.controller');

const router =  Router();

router.get( '/:search', [ JWTValidator ], getAll);

router.get( 'collection/:tabla/:search', [ JWTValidator ], getAll);

module.exports = router;