# Odometer API

Odometer API é uma aplicação Node.js que usa Tesseract.js e Sharp para pré-processar e reconhecer texto de imagens enviadas.

## Índice

- [Instalação](#instalação)
- [Uso](#uso)
- [Endpoints da API](#endpoints-da-api)
- [Variáveis de Ambiente](#variáveis-de-ambiente)
- [Dependências](#dependências)
- [Testes](#testes)

## Instalação

1. Clone o repositório:

    ```sh
    git clone <repository-url>
    ```

2. Navegue até o diretório do projeto:

    ```sh
    cd odometer-api
    ```

3. Instale as dependências:

    ```sh
    npm install
    ```

## Uso

1. Inicie o servidor:

    ```sh
    npm start
    ```

2. O servidor será executado na porta especificada no arquivo `.env` (o padrão é 3333).

## Endpoints da API

### GET /

- **Descrição**: Retorna uma mensagem "Hello World".
- **Resposta**:

    ```json
    Hello World
    ```

### POST /upload

- **Descrição**: Envia uma imagem, pré-processa e reconhece o texto dela.
- **Requisição**:
  - **Content-Type**: `multipart/form-data`
  - **Corpo**:
    - `image` (arquivo): O arquivo de imagem a ser enviado.
- **Resposta**:

    ```json
    {
      "text": "recognized text from the image"
    }
    ```

## Variáveis de Ambiente

- `PORT`: A porta na qual o servidor será executado (o padrão é 3333).

## Dependências

- [cors](https://www.npmjs.com/package/cors) `^2.8.5`
- [express](https://www.npmjs.com/package/express) `^4.21.1`
- [fs](https://www.npmjs.com/package/fs) `^0.0.1-security`
- [multer](https://www.npmjs.com/package/multer) `^1.4.5-lts.1`
- [nodemon](https://www.npmjs.com/package/nodemon) `^3.1.7`
- [sharp](https://www.npmjs.com/package/sharp) `^0.33.5`
- [tesseract.js](https://www.npmjs.com/package/tesseract.js) `^5.1.1`
- [ora](https://www.npmjs.com/package/ora) `^6.0.1`

## Testes

Para executar os testes, use o seguinte comando:

```sh
npm run test
