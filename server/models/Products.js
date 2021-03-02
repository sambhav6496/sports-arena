const mongoose = require("mongoose");
const enums = require("../constants/index");
const productSchema = {
  name: {
    type: String,
    required: [true, enums.validationError.Products.no_Name],
  },
  category: {
    type: String,
    required: [true, enums.validationError.Products.no_Category],
    enum: enums.constants.categories,
  },
  material: {
    type: String,
    required: [true, enums.validationError.Products.no_Material],
  },
  typeOfSport: {
    type: String,
    required: [true, enums.validationError.Products.no_Sport],
    enum: enums.constants.SPORTS,
  },
  color: {
    type: String,
    required: [true, enums.validationError.Products.no_Color],
  },
  productImage: [
    {
      url: String,
      alt: String,
    },
  ],
};

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
