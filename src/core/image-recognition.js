const { createWorker, OEM, PSM } = require("tesseract.js");
const sharp = require("sharp");
const fs = require("fs");

async function preprocessImage(imagePath, outputImage) {
  await sharp(imagePath)
    .resize({ width: 10000 })
    .greyscale()
    .modulate({ brightness: 2, contrast: 2.5, lightness: 2 })
    .threshold(128)
    .toFile(outputImage);
}

async function recognizeImage(imageFile) {
  const worker = await createWorker("eng");

  try {
    const imageBuffer = fs.readFileSync(imageFile);
    const result = await worker.recognize(imageBuffer, {
      tessedit_char_whitelist: "0123456789",
      tessedit_ocr_engine_mode: OEM.TESSERACT_ONLY,
      tessedit_pageseg_mode: PSM.SINGLE_LINE,
    });


    return result.data.text.trim();
  } catch (error) {
    console.error("Erro ao reconhecer a imagem:", error);
  } finally {
    await worker.terminate();
  }
}

module.exports = { preprocessImage, recognizeImage };
