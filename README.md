# Odometer API

Odometer API is a Node.js application that uses Tesseract.js and Sharp to preprocess and recognize text from uploaded images.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Dependencies](#dependencies)
- [Testing](#testing)

## Installation

1. Clone the repository:

    ```sh
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```sh
    cd odometer-api
    ```

3. Install the dependencies:

    ```sh
    npm install
    ```

## Usage

1. Start the server:

    ```sh
    npm start
    ```

2. The server will run on the port specified in the `.env` file (default is 3333).

## API Endpoints

### GET /

- **Description**: Returns a "Hello World" message.
- **Response**:

    ```json
    Hello World
    ```

### POST /upload

- **Description**: Uploads an image, preprocesses it, and recognizes text from it.
- **Request**:
  - **Content-Type**: `multipart/form-data`
  - **Body**:
    - `image` (file): The image file to be uploaded.
- **Response**:

    ```json
    {
      "text": "recognized text from the image"
    }
    ```

## Environment Variables

- `PORT`: The port on which the server will run (default is 3333).

## Dependencies

- [cors](https://www.npmjs.com/package/cors) `^2.8.5`
- [express](https://www.npmjs.com/package/express) `^4.21.1`
- [fs](https://www.npmjs.com/package/fs) `^0.0.1-security`
- [multer](https://www.npmjs.com/package/multer) `^1.4.5-lts.1`
- [nodemon](https://www.npmjs.com/package/nodemon) `^3.1.7`
- [sharp](https://www.npmjs.com/package/sharp) `^0.33.5`
- [tesseract.js](https://www.npmjs.com/package/tesseract.js) `^5.1.1`
- [ora](https://www.npmjs.com/package/ora) `^6.0.1`

## Testing

To run the tests, use the following command:

```sh
npm run test
```
