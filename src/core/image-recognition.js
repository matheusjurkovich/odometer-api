const { createWorker, OEM } = require("tesseract.js");
const sharp = require("sharp");
const fs = require("fs");

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

module.exports = { preprocessImage, recognizeImage };