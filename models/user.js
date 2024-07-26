require("dotenv").config();
const mongoose = require("mongoose");

const mongodbURL = process.env.MONGODB_URL;
mongoose
  .connect(mongodbURL);
const userSchema = mongoose.Schema({
  username: String,
  name: String,
  age: Number,
  email: String,
  password: String,
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "post" }],
});

module.exports = mongoose.model("user", userSchema);
