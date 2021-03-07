class AdminProductRoutes {


    async getProduct(req, res) {
        res.json({"response":"reached"});
    }
    async getProductd(req, res) {
        res.json({"resddponse":req.params.id});
    }
}

module.exports = new AdminProductRoutes();