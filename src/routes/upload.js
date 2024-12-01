const express = require("express");
const multer = require("multer");
const path = require("path");
const { preprocessImage, recognizeImage } = require("../core/image-recognition");

const router = express.Router();
const upload = multer({ dest: "src/tmp/" });

router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const { path: imagePath } = req.file;
    const outputImage = path.join(__dirname, "../tmp", "output.jpg");

    await preprocessImage(imagePath, outputImage);
    const text = await recognizeImage(outputImage);
    res.json({ text });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;