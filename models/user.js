const Mongoose = require("mongoose");

// Example of a schema for a user.
const UserSchema = new Mongoose.Schema({
  _id: {
    type: String,
  },
});

module.exports = Mongoose.model("User", UserSchema);
