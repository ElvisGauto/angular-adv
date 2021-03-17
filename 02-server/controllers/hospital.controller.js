const { response } = require('express');

const Hospital = require('../models/hospital.model');

const getHospitals = async (req, res = response) => {

    const hospitals  = await Hospital.find()
                            .populate('user', 'name');

    res.json({
        ok: true,
        hospitals
    });
}

const createHospital = async (req, res = response) => {

    const uid = req.uid;
    const hospital = new Hospital({
        user: uid,
        ...req.body
    });

    try {

        const hospitalDB = await hospital.save();

        res.json({
            ok: true,
            hospital: hospitalDB
        });

    } catch(err) {
        console.log(err);
        res.status(500).json({
            ok: false,
            msg: 'Something went wrong'
        });
    }
}

const updateHospital = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Update Hospitals'
    });
}

const deleteHospital = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Delete Hospitals'
    });
}

module.exports = {
    getHospitals,
    createHospital,
    updateHospital,
    deleteHospital
}