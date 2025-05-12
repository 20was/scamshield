import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 4002;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', service: 'reporting-service' });
});

app.get('/reports', (req, res) => {
  // In a real implementation, this would fetch reports from the database
  res.json({
    reports: [],
  });
});

app.post('/reports', (req, res) => {
  // In a real implementation, this would save a report to the database
  res.status(201).json({
    message: 'Report created successfully',
    reportId: 'sample-report-id',
  });
});

// Start server
app.listen(port, () => {
  console.log(`Reporting Service running on port ${port}`);
});
