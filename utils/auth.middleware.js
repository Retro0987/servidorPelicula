const jwt = require('jsonwebtoken');

exports.authenticateToken = (req, res, next) => {

    const token = req.headers.authorization;

    if(!token ) return res.status(401).json({ message: "No se proporciono el token de acceso" });

    jwt.verify(token, 'secreto', (err, decoded) => {
        if(err) return res.status(403).json({ message: "Token Invalido" });
        req.userId = decoded.userId;
        next();
    });
}
