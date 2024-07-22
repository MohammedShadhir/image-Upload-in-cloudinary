const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");
const Image = require("../models/Image");

router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const newImage = new Image({
      url: req.file.path,
      filename: req.file.filename,
    });
    await newImage.save();
    res.json(newImage);
  } catch (err) {
    res.status(500).json({ error: "Failed to upload image" });
  }
});

router.get("/images", async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch images" });
  }
});

module.exports = router;
