const jwt = require('jsonwebtoken');

exports.authenticateUser = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Authentication failed' });
    }
    jwt.verify(token, 'secret-key', (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Authentication failed' });
        }
        req.userId = decoded.id;
        next();
    });
};
