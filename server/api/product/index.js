const router = require("express").Router();
const ProductRouter = require("./route");

router.post("/product", ProductRouter.addProduct);
router.get("/getProduct/:Id", ProductRouter.getProduct);
router.delete("/deleteProduct/:Id", ProductRouter.deletetProduct);
router.put("/updateProduct/:Id", ProductRouter.updateProduct);
router.get("/product", ProductRouter.showProduct);

module.exports = router;
