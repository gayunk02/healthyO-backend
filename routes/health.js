import express from 'express';
import { getSafeHealthInfo } from '../controllers/healthController.js';

const router = express.Router();

router.post('/health', getSafeHealthInfo);

// ✅ default export로 내보내야 server.js에서 import 가능!
export default router;