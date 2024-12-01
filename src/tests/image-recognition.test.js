const { preprocessImage, recognizeImage } = require("../core/image-recognition");
const path = require("path");
const fs = require("fs");
const ora = require("ora");

describe('Image Recognition', () => {
    let spinner;

    beforeEach(() => {
        spinner = ora("Initializing test...").start();
    });

    afterEach(() => {
        spinner.stop();
    });

    const imagesDir = path.join(__dirname, "../tests/core/images");
    const outputDir = path.join(__dirname, "../tests/core/output");

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }

    const imageFiles = fs.readdirSync(imagesDir);

    let results = [];

    imageFiles.forEach((file) => {
        it(`should correctly identify text in ${file}`, async () => {
            const inputImagePath = path.join(imagesDir, file);
            const outputImagePath = path.join(outputDir, `output_${file}`);

            spinner.text = `Processing image: ${file}...`;
            spinner.color = "cyan";

            await preprocessImage(inputImagePath, outputImagePath);
            const result = await recognizeImage(outputImagePath);

            results.push({ file, result });

            expect(result).toBeTruthy();
            expect(result).not.toBeNull();
            expect(result).not.toBeUndefined();
            expect(result.length).toBeGreaterThan(0);

        }, 30000);
    });

    afterAll(() => {
        spinner.stop();
        console.table(results);
    });
});