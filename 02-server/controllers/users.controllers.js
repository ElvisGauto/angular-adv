


const getUsers =  (req, res) => {
    res.json({
        ok: true,
        msg: 'Obteniendo  usuarios'
    })
}

const createUser =  (req, res) => {
    console.log(req.body);

    res.json({
        ok: true,
        msg: 'Creando Usuarios'
    })
}

module.exports = {
    getUsers,
    createUser
}