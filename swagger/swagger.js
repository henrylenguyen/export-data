import { serve, setup } from 'swagger-ui-express';
import swaggerDocument from './swagger.json' assert { type: 'json' };

const options = {
  customSiteTitle: 'API Dataset',
  customCss: '.topbar-wrapper img',
  // Add securityDefinitions for JWT authentication
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      name: 'Authorization',
      scheme: 'bearer',
      in: 'header',
    },
    userTokenAuth: {
      type: 'apiKey',
      name: 'userToken',
      scheme: 'bearer',
      in: 'header',
    },
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
        "url": "https://movie-server.herokuapp.com/",
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