const jwt = require('jsonwebtoken')

module.exports = function(req, res, next) {
    if(req.method === "OPTIONS") {
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1] //Тип_токена(bearer) токен(asdmaksdnasd)
        if(!token) {
            return res.status(401).json({message: "Authorization error"})
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded
        next()
    } catch (e) {
        res.status(401).json({message: "Authorization error"})
    }
}