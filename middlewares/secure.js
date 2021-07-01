const secure = function(req, res, next) {
    if ( req.params.token) {
        next()
    } else {
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    }
};

module.exports = secure;