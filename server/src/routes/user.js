import express from 'express';
import { login } from '../controller/user';
const router = express.Router();

router.post('/login', login);

export default router;
