const adminMiddlware = (req, res, next) => {
    const user = req.session.user;
    console.log(user.role)
    if (user.role === 'Admin'){
        next();
    }
    return res.status(400).json({error : 'Unauthorised Access'})

};

module.exports = adminMiddlware;
