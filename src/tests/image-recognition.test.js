const { preprocessImage, recognizeImage } = require("../core/image-recognition");
const path = require("path");
const ora = require("ora");

describe("Image Recognition", () => {
  let spinner;

  beforeAll(() => {
    console.log("\n=== Starting Image Recognition Tests ===\n");
  });

  beforeEach(() => {
    // Inicializa o spinner antes de cada teste
    spinner = ora("Initializing test...").start();
  });

  afterEach(() => {
    // Para o spinner após cada teste
    spinner.stop();
  });

  it("should correctly identify an odometer", async () => {
    const inputImagePath = path.join(__dirname, "../tests/core/images/odometro.png");
    const outputImagePath = path.join(__dirname, "../tests/core/output/output.jpg");

    spinner.text = "Processing image: odometro.png...";
    spinner.color = "cyan";

    await preprocessImage(inputImagePath, outputImagePath);
    const result = await recognizeImage(outputImagePath);

    spinner.succeed("Finished processing: odometro.png");
    expect(result).toBe("91308");
  }, 30000);

  it("should correctly identify an odometer 2", async () => {
    const inputImagePath = path.join(__dirname, "../tests/core/images/odometro2.png");
    const outputImagePath = path.join(__dirname, "../tests/core/output/output.jpg");

    spinner.text = "Processing image: odometro2.png...";
    spinner.color = "yellow";

    await preprocessImage(inputImagePath, outputImagePath);
    const result = await recognizeImage(outputImagePath);

    spinner.succeed("Finished processing: odometro2.png");
    expect(result).toBe("020047");
  }, 30000);

  it("should correctly identify an odometer 3", async () => {
    const inputImagePath = path.join(__dirname, "../tests/core/images/odometro3.png");
    const outputImagePath = path.join(__dirname, "../tests/core/output/output.jpg");

    spinner.text = "Processing image: odometro3.png...";
    spinner.color = "green";

    await preprocessImage(inputImagePath, outputImagePath);
    const result = await recognizeImage(outputImagePath);

    spinner.succeed("Finished processing: odometro3.png");
    expect(result).toBe("165466");
  }, 30000);
});

