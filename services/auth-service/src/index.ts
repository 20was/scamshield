import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 4001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', service: 'auth-service' });
});

app.post('/register', (req, res) => {
  // In a real implementation, this would create a user in the database
  res.status(201).json({ message: 'User registration placeholder' });
});

app.post('/login', (req, res) => {
  // In a real implementation, this would authenticate a user
  res.json({
    message: 'Login successful placeholder',
    token: 'sample-jwt-token',
  });
});

// Start server
app.listen(port, () => {
  console.log(`Auth Service running on port ${port}`);
});
