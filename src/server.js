const express = require("express");
const multer = require("multer");
const { createWorker, OEM } = require("tesseract.js");
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const app = express();
const upload = multer({ dest: "uploads/" });

async function preprocessImage(imagePath, outputImage) {
  await sharp(imagePath).resize(1500).greyscale().toFile(outputImage);
}

async function recognizeImage(imageFile) {
  const worker = await createWorker("eng");

  try {
    const imageBuffer = fs.readFileSync(imageFile);

    const result = await worker.recognize(imageBuffer, {
      tessedit_ocr_engine_mode: OEM.TESSERACT_ONLY,
    });

    return result.data.text;
  } catch (error) {
    console.error("Erro ao reconhecer a imagem:", error);
  } finally {
    await worker.terminate();
  }
}

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