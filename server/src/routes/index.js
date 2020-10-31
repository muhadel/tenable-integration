import express from 'express';
import swaggerRoutes from './swagger';
import userRoutes from './user';
import tenableRoutes from './tenable';

const router = express.Router();

router.use('/swagger', swaggerRoutes);
router.use('/user', userRoutes);
router.use('/tenable', tenableRoutes);

export default router;
