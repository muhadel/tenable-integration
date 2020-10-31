import express from 'express';
import swaggerUi from 'swagger-ui-express';
const swaggerDoc = require('../config/swagger');
const router = express.Router();

// define routes
router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDoc));

export default router;
