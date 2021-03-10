const adminMiddlware = (req, res, next) => {

    console.log("reached")
    next();
}

module.exports = adminMiddlware;