import express from 'express';
import { getSafeHealthInfo } from '../controllers/healthController.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

router.post('/safe-health-info', authMiddleware, getSafeHealthInfo);

export default router;
