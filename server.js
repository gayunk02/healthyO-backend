// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import healthRoutes from './routes/health.js'; // ✅ .js 확장자 꼭 써야 함 (ESM)

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes); // ✅ /api/auth/signup, /login 등 여기로 연결
app.use('/api/health', healthRoutes); // ✅ 라우트 경로도 맞춰줬어

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
