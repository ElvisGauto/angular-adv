const { response } = require('express');
const Doctor = require('../models/doctor.model');

const getDoctors = async (req, res = response) => {

    const doctors = await Doctor.find()
                            .populate('users', 'name')
                            .populate('hospitalschema', 'name');

    res.json({
        ok: true,
        doctors
    });
}

const createDoctor = async (req, res = response) => {

    const uid = req.uid;
    const doctor = new Doctor({
        user: uid,
        ...req.body
    });

    try {

        const doctorDB = await doctor.save();

        res.json({
            ok: true,
            doctor: doctorDB
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            ok: false,
            msg: 'Something went wrong'
        });
    }
}

const updateDoctor = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Update Doctor'
    });
}

const deleteDoctor = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Delete Doctor'
    });
}

module.exports = {
    getDoctors,
    createDoctor,
    updateDoctor,
    deleteDoctor
}