const express = require("express");
const multer = require("multer");
const path = require("path");
const upload = multer({ dest: "src/uploads/" });
const { preprocessImage, recognizeImage } = require("./core/image-recognition");

const app = express();

app.post("/upload", upload.single("image"), async (req, res) => {
  const { path: imagePath } = req.file;
  const outputImage = path.join(__dirname, "uploads", "output.jpg");

  await preprocessImage(imagePath, outputImage);
  const text = await recognizeImage(outputImage);
  res.json({ text });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});