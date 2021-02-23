const { response } = require('express');
const bcrypt = require('bcryptjs');

const User = require('../models/user.model');
const { generateJWT } = require('../helpers/jwt.helper');


const getUsers =  async (req, res) => {

    const users = await User.find();

    res.json({
        ok: true,
        users,
        uid: req.uid
    })
}

const createUser = async (req, res = response) => {
    const { email, password } = req.body;

    try {

        const emailExist = await User.findOne({ email });
        if (emailExist) {
            return res.status(400).json({
                ok: false,
                msg: 'Email has already been registered'
            })
        }
        const user = new User(req.body);

        // encriptar contaseña 
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync( password,  salt );

        // cargar  token
        
        // guardar usuario
        await user.save();
        
        const token  = await generateJWT(user.uid);
        
        res.json({
            ok: true,
            user,
            token
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            ok: false,
            msg:  'Unexpect error create'
        });
    }
}

const updateUser = async (req, res) => {
    const uid = req.params.id;
    try {

        const userDB = await User.findById(uid);

        if ( !userDB ) {
            return res.status(404).json({
                ok: false,
                msg: 'User not found'
            });
        }
        
        const { password, google, email, ...fields } = req.body;
        if ( userDB.email !== email ) {
            const emailExist = await User.findOne({ email: email });
            if ( emailExist )  {
               return res.status(400).json({
                   ok: false,
                   msg: 'update error: email has already been registered'
               }) 
            }
        }

        fields.email = email;

        // Updates
        const userUpdate = await User.findByIdAndUpdate( uid, fields, { new: true } );


        res.json({
            ok: true,
            user: userUpdate
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            ok: false,
            msg: 'Unexpect error update'
        })
    }
}

const deleteUser = async (req, res) => {
    const uid = req.params.id;
    
    try {
        const userDB = await User.findById(uid);

        if (!userDB) {
            return res.status(404).json({
                ok: false,
                msg: 'User not found'
            })
        }

        await User.findByIdAndDelete(uid);
        return res.json({
            ok: true,
            msg: 'User deleted'
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            ok: false,
            msg: 'Talk with the adminstrator'
        })
    }
}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
}