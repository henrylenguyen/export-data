import { serve, setup } from 'swagger-ui-express';
import swaggerDocument from './swagger.json' assert { type: 'json' };

const options = {
  customSiteTitle: 'API Dataset',
  customCss: '.topbar-wrapper img',
  // Add securityDefinitions for JWT authentication
  securityDefinitions: {

  },
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:1812',
        description: 'Local server',
      },
      {
        "url": "https://export-data-5d46e4007494.herokuapp.com",
        "description": "Heroku server"
      }
    ],
  },
  apis: ['./routes/*.js'],
};

export default function (app) {
  // Set up Swagger middleware
  app.use('/', serve, setup(swaggerDocument, options));
};