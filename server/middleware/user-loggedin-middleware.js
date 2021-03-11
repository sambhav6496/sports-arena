const authorizationMiddlware = (req, res, next) => {
    const user = req.session.user;
    if (user){
        next();
    }
    else{
        return res.redirect('/login')
    }
}


module.exports = authorizationMiddlware;