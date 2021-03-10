const mongoose = require("mongoose");
const enums = require("../constants/index");
const userSchema = {
  firstName: {
    type: String,
    required: [true, enums.validationError.User.no_FirstName],
  },
  lastName: {
    type: String,
    required: [true, enums.validationError.User.no_LastName],
  },
  email: {
    type: String,
    required: [true, enums.validationError.User.no_Email.message],
  },
  password: {
    type: String,
    required: [true, enums.validationError.User.no_Password],
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
};
const User = mongoose.model("User", userSchema);

module.exports = User;
