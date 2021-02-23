const jwt = require('jsonwebtoken');

const generateJWT = (uid) => {

    return new Promise( (resolve, reject ) => {
        const payload = {
            uid
        };
        jwt.sign( payload, process.env.JWT_SECRET, { expiresIn: '12h' },
            (err, token)  => {
                if (err) {
                    console.log(err);
                    reject('token generation failed')
                } else {
                    resolve(token);
                }
            }
    
        );
    }) 

}

module.exports = {
    generateJWT
}