
const adminMiddleware = (req, res, next) => {
    if (req.session.user) {
        if (req.session.user.role === "admin") {
            next();
        } else {
            res.redirect('/error/403');
        }
    } else {
        res.redirect('/login');
    }
next()
}

module.exports = adminMiddleware;