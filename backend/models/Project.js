const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  mediaType: { type: String, enum: ["image", "video"] },
  mediaUrl: String,
  cloudinaryId: String,
  createdAt: { type: Date, default: Date.now },
  order: Number
});

module.exports = mongoose.model("Project", projectSchema);
