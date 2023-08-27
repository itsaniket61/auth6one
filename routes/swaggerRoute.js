const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const router = express.Router();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'auth6one Documentation',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js'], // Specify the path to your annotated route files
};

const specs = swaggerJsdoc(options);

router.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

module.exports = router;
