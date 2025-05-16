# API Gateway Service 🚪

The API Gateway service acts as the main entry point for all client requests in the ScamShield platform. It handles routing, request validation, rate limiting, and authentication before forwarding requests to the appropriate microservices.

## 🎯 Features

- **Request Routing**: Routes requests to appropriate microservices
- **Authentication**: Validates JWT tokens and handles authentication
- **Rate Limiting**: Prevents abuse through request rate limiting
- **Request Validation**: Validates incoming requests against schemas
- **Response Transformation**: Transforms responses to maintain consistent API format
- **Error Handling**: Centralized error handling and formatting
- **Logging**: Comprehensive request/response logging
- **Caching**: Response caching for frequently accessed endpoints

## 🏗️ Architecture

```
API Gateway
├── src/
│   ├── config/           # Configuration files
│   ├── middleware/       # Custom middleware
│   ├── routes/          # Route definitions
│   ├── services/        # Service integrations
│   ├── utils/           # Utility functions
│   └── app.ts           # Main application file
├── tests/               # Test files
└── package.json         # Dependencies and scripts
```

## 🔧 Configuration

The service uses environment variables for configuration. Create a `.env` file with the following variables:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Service URLs
AUTH_SERVICE_URL=http://auth-service:3001
REPORTING_SERVICE_URL=http://reporting-service:3002
AI_SERVICE_URL=http://ai-service:3003
SEARCH_SERVICE_URL=http://search-service:3004

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# JWT Configuration
JWT_SECRET=your-jwt-secret
JWT_EXPIRATION=1h

# Redis Configuration
REDIS_URL=redis://redis:6379
```

## 🚀 Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start development server**

   ```bash
   npm run dev
   ```

3. **Run tests**
   ```bash
   npm test
   ```

## 📚 API Documentation

### Authentication Endpoints

- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/refresh` - Refresh access token
- `POST /api/auth/logout` - User logout

### Reporting Endpoints

- `POST /api/reports` - Create new scam report
- `GET /api/reports` - List scam reports
- `GET /api/reports/:id` - Get specific report
- `PUT /api/reports/:id` - Update report
- `DELETE /api/reports/:id` - Delete report

### AI Detection Endpoints

- `POST /api/detect` - Analyze content for scams
- `GET /api/detect/history` - Get detection history

### Search Endpoints

- `GET /api/search` - Search scam reports
- `GET /api/search/suggestions` - Get search suggestions

## 🔒 Security

- All endpoints except login and registration require authentication
- Rate limiting is applied to all endpoints
- Input validation is performed on all requests
- CORS is configured to allow only trusted origins
- Request logging for security auditing

## 📊 Monitoring

The service includes:

- Request/response logging
- Error tracking
- Performance metrics
- Health check endpoint at `/health`

## 🔄 Dependencies

- Express.js - Web framework
- TypeScript - Type safety
- JWT - Authentication
- Redis - Rate limiting and caching
- Winston - Logging
- Jest - Testing
- Docker - Containerization

## 🤝 Contributing

Please read our [Contributing Guide](../../CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](../../LICENSE) file for details.
