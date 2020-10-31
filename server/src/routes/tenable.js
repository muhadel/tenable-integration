import express from 'express';
import { getAssets } from '../controller/tenable';

const router = express.Router();
router.get('/assets', getAssets);

export default router;
