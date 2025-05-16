# AI Service 🤖

The AI Service is the core intelligence engine of ScamShield, responsible for analyzing content and detecting potential scams using machine learning models. It processes text, images, and URLs to identify scam patterns and provide risk assessments.

## 🎯 Features

- **Content Analysis**: Analyze text, images, and URLs for scam patterns
- **Real-time Detection**: Instant scam detection and risk assessment
- **Pattern Recognition**: Identify common scam patterns and techniques
- **Risk Scoring**: Generate risk scores for analyzed content
- **Model Training**: Continuous learning from verified scam reports
- **API Integration**: Easy integration with other services
- **Batch Processing**: Handle multiple analysis requests efficiently
- **Model Versioning**: Track and manage different model versions

## 🏗️ Architecture

```
AI Service
├── src/
│   ├── config/           # Configuration files
│   ├── controllers/      # Request handlers
│   ├── middleware/       # Custom middleware
│   ├── models/          # ML model definitions
│   ├── routes/          # Route definitions
│   ├── services/        # Business logic
│   ├── utils/           # Utility functions
│   └── app.ts           # Main application file
├── ml/                  # Machine learning models
│   ├── text/           # Text analysis models
│   ├── image/          # Image analysis models
│   └── url/            # URL analysis models
├── tests/               # Test files
└── package.json         # Dependencies and scripts
```

## 🔧 Configuration

Create a `.env` file with the following variables:

```env
# Server Configuration
PORT=3003
NODE_ENV=development

# Model Configuration
MODEL_PATH=/app/ml/models
MODEL_VERSION=v1.0.0
BATCH_SIZE=32
CONFIDENCE_THRESHOLD=0.85

# GPU Configuration
USE_GPU=true
GPU_MEMORY_LIMIT=4096

# Redis Configuration
REDIS_URL=redis://redis:6379

# Logging
LOG_LEVEL=info
MODEL_LOGS_PATH=/app/logs
```

## 🚀 Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Download pre-trained models**

   ```bash
   npm run download-models
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Run tests**
   ```bash
   npm test
   ```

## 📚 API Documentation

### Analysis Endpoints

- `POST /api/analyze/text`

  - Analyze text content
  - Request body: `{ text, options }`
  - Response: `{ riskScore, patterns, confidence }`

- `POST /api/analyze/image`

  - Analyze image content
  - Request body: `FormData with image`
  - Response: `{ riskScore, patterns, confidence }`

- `POST /api/analyze/url`

  - Analyze URL content
  - Request body: `{ url, options }`
  - Response: `{ riskScore, patterns, confidence }`

- `POST /api/analyze/batch`
  - Batch analysis
  - Request body: `{ items: Array<{type, content}> }`
  - Response: `{ results: Array<{riskScore, patterns, confidence}> }`

### Model Management Endpoints

- `GET /api/models`

  - List available models
  - Response: `{ models }`

- `POST /api/models/train`

  - Train new model version
  - Request body: `{ trainingData, options }`
  - Response: `{ modelId, status }`

- `GET /api/models/:id/status`
  - Get model training status
  - Response: `{ status, progress, metrics }`

## 🤖 Machine Learning Models

### Text Analysis Model

- Purpose: Analyze text content for scam patterns
- Features:
  - Natural Language Processing
  - Pattern recognition
  - Sentiment analysis
  - Keyword extraction

### Image Analysis Model

- Purpose: Detect scam-related visual content
- Features:
  - Object detection
  - Text extraction (OCR)
  - Logo recognition
  - Visual pattern matching

### URL Analysis Model

- Purpose: Analyze URLs and web content
- Features:
  - Domain reputation
  - SSL certificate validation
  - Content analysis
  - Phishing detection

## 🔄 Dependencies

- TensorFlow.js - Machine learning
- Node.js - Runtime
- TypeScript - Type safety
- Express.js - Web framework
- Redis - Caching
- Docker - Containerization
- GPU.js - GPU acceleration

## 📈 Performance Considerations

- Model quantization
- Batch processing
- GPU acceleration
- Caching frequent analyses
- Load balancing
- Model optimization

## 🔍 Monitoring

- Model performance metrics
- Request/response logging
- Error tracking
- Resource utilization
- Health check endpoint at `/health`

## 🔒 Security Features

- Input validation
- Rate limiting
- Model versioning
- Secure model storage
- Access control

## 🤝 Contributing

Please read our [Contributing Guide](../../CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](../../LICENSE) file for details.
