const { response } = require('express');
const bcrypt = require('bcryptjs');

const Usuario = require('../models/user.model');
const { generateJWT } = require('../helpers/jwt.helper');

const login = async (req, res = response) => {

    const { email,  password }  =  req.body;

    try {

        const userDB = await Usuario.findOne({ email });

        // Email Verification
        if (!userDB) {
            return res.status(400).json({
                ok: false,
                msg: 'Email or Password invalid'
            });
        }

        // Password verification
        const validPassword = bcrypt.compareSync(password, userDB.password);
        if ( !validPassword ) {
            return res.status(400).json({
                ok: false,
                msg: 'Email or Password invalid'
            });
        }

        // GENERATE TOKEN - JWT (JASON WEB TOKEN);
        const token = await generateJWT(userDB.id);

        res.json({
            ok: true,
            token
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            ok:  false,
            msg: 'Something went wrong'
        });
    }
}

module.exports = {
    login
}