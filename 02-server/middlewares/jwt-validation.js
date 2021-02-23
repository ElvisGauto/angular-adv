const jwt = require('jsonwebtoken');

const JWTValidator = (req, res, next) => {

    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'Token not found'
        });
    }

    try {

        const { uid } = jwt.verify(token, process.env.JWT_SECRET);
        req.uid = uid;
        next();

    } catch (err) {
        return res.status(401).json({
            ok: false,
            msg: 'Token not found'
        });
    }

}

module.exports = {
    JWTValidator
}