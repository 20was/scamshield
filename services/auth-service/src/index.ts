import express, { Request, Response } from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = process.env.PORT || 4001;

// Middleware
app.use(cors());
app.use(express.json());

// Database would be initialized here in a real app

// Routes
app.get('/', (_req: Request, res: Response) => {
  res.send('Auth Service is running!');
});

app.post('/register', (req: Request, res: Response) => {
  // Registration logic would go here
  res.json({ message: 'Registration endpoint (not implemented yet)' });
});

app.post('/login', (req: Request, res: Response) => {
  // Login logic would go here
  res.json({ message: 'Login endpoint (not implemented yet)' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Auth Service running on port ${PORT}`);
});
