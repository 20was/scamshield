import express, { Request, Response } from 'express';
import cors from 'cors';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (_req: Request, res: Response) => {
  res.send('API Gateway is running!');
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', service: 'api-gateway' });
});

app.get('/api/stats', (req, res) => {
  res.json({
    totalScamsReported: 0,
    activeScams: 0,
    usersProtected: 0,
    estimatedSavings: 0,
  });
});

// Proxy to Auth Service
app.use(
  '/api/auth',
  createProxyMiddleware({
    target: 'http://auth-service:4001',
    changeOrigin: true,
    pathRewrite: {
      '^/api/auth': '/',
    },
  })
);

// Proxy to Reporting Service
app.use(
  '/api/reports',
  createProxyMiddleware({
    target: 'http://reporting-service:4002',
    changeOrigin: true,
    pathRewrite: {
      '^/api/reports': '/',
    },
  })
);

// Start the server
app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
