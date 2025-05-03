import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4002;

// Middleware
app.use(cors());
app.use(express.json());

// Database would be initialized here in a real app

// Routes
app.get('/', (_req: Request, res: Response) => {
  res.send('Reporting Service is running!');
});

app.post('/submit', (req: Request, res: Response) => {
  // Scam reporting logic would go here
  res.json({
    message: 'Scam report submission endpoint (not implemented yet)',
  });
});

app.get('/list', (_req: Request, res: Response) => {
  // List scams logic would go here
  res.json({ message: 'Scam list endpoint (not implemented yet)' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Reporting Service running on port ${PORT}`);
});
