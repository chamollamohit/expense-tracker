import jwt from "jsonwebtoken";

const verifyToken = async (req, res, next) => {

    try {
        const token = req.cookies.token
        if (!token) {
            return res.redirect('/login')
        }
        const userdetail = jwt.verify(token, process.env.JWT_SECRET)
        req.userinfo = userdetail
        return next()
    } catch (error) {
        res.clearCookie('token');
        return res.redirect('/login');
    }

}

const isLoggedIn = async (req, res, next) => {
    const token = req.cookies.token

    if (!token) {
        return next()
    }
    try {

        jwt.verify(token, process.env.JWT_SECRET)
        return res.redirect('/tracker')

    } catch (error) {
        res.clearCookie('token')
        return next();
    }

}


export { verifyToken, isLoggedIn }