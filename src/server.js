const express = require("express");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const upload = multer({ dest: "src/uploads/" });
const { preprocessImage, recognizeImage } = require("./core/image-recognition");

const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
}));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const { path: imagePath } = req.file;
    const outputImage = path.join(__dirname, "uploads", "output.jpg");

    await preprocessImage(imagePath, outputImage);
    const text = await recognizeImage(outputImage);
    res.json({ text });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});