const mongoose = require("mongoose");

const GuideSchema = mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  number: Number,
  description: String,
  location: String,
});

module.exports = mongoose.model("guideInfo", GuideSchema);
