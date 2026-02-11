const express = require("express");
const upload = require("../utils/cloudinaryUpload");
const Project = require("../models/Project");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/", auth, upload.single("media"), async (req, res) => {
  const project = await Project.create({
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    mediaType: req.file.resource_type,
    mediaUrl: req.file.path,
    cloudinaryId: req.file.filename
  });

  res.json(project);
});

router.get("/", async (req, res) => {
  const projects = await Project.find().sort({ order: 1 });
  res.json(projects);
});

router.delete("/:id", auth, async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
