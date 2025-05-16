# Authentication Service 🔐

The Authentication Service is responsible for managing user authentication and authorization in the ScamShield platform. It handles user registration, login, password management, and JWT token generation.

## 🎯 Features

- **User Management**: Registration, login, and profile management
- **JWT Authentication**: Secure token-based authentication
- **Password Security**: Bcrypt password hashing and validation
- **Role-Based Access Control**: User roles and permissions
- **Session Management**: Token refresh and revocation
- **OAuth Integration**: Social login support
- **Two-Factor Authentication**: Optional 2FA support
- **Account Recovery**: Password reset and email verification

## 🏗️ Architecture

```
Auth Service
├── src/
│   ├── config/           # Configuration files
│   ├── controllers/      # Request handlers
│   ├── middleware/       # Custom middleware
│   ├── models/          # Database models
│   ├── routes/          # Route definitions
│   ├── services/        # Business logic
│   ├── utils/           # Utility functions
│   └── app.ts           # Main application file
├── tests/               # Test files
└── package.json         # Dependencies and scripts
```

## 🔧 Configuration

Create a `.env` file with the following variables:

```env
# Server Configuration
PORT=3001
NODE_ENV=development

# Database
MONGODB_URI=mongodb://mongodb:27017/scamshield
MONGODB_USER=admin
MONGODB_PASSWORD=password

# JWT Configuration
JWT_SECRET=your-jwt-secret
JWT_EXPIRATION=1h
JWT_REFRESH_EXPIRATION=7d

# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-specific-password

# OAuth Configuration
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

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

- `POST /api/auth/register`

  - Register a new user
  - Request body: `{ email, password, name }`
  - Response: `{ token, user }`

- `POST /api/auth/login`

  - Login existing user
  - Request body: `{ email, password }`
  - Response: `{ token, user }`

- `POST /api/auth/refresh`

  - Refresh access token
  - Request body: `{ refreshToken }`
  - Response: `{ token }`

- `POST /api/auth/logout`
  - Logout user
  - Request body: `{ refreshToken }`
  - Response: `{ success: true }`

### User Management Endpoints

- `GET /api/users/me`

  - Get current user profile
  - Response: `{ user }`

- `PUT /api/users/me`

  - Update user profile
  - Request body: `{ name, email }`
  - Response: `{ user }`

- `POST /api/users/password/reset`

  - Request password reset
  - Request body: `{ email }`
  - Response: `{ success: true }`

- `POST /api/users/password/change`
  - Change password
  - Request body: `{ currentPassword, newPassword }`
  - Response: `{ success: true }`

## 🔒 Security Features

- Password hashing using bcrypt
- JWT token encryption
- Rate limiting on authentication endpoints
- Input validation and sanitization
- CORS configuration
- Security headers
- Request logging
- Account lockout after failed attempts

## 📊 Database Schema

### User Model

```typescript
interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  role: 'user' | 'admin' | 'moderator';
  isVerified: boolean;
  isActive: boolean;
  lastLogin: Date;
  createdAt: Date;
  updatedAt: Date;
}
```

## 🔄 Dependencies

- Express.js - Web framework
- TypeScript - Type safety
- MongoDB - Database
- Mongoose - ODM
- JWT - Authentication
- Bcrypt - Password hashing
- Nodemailer - Email service
- Redis - Session management
- Jest - Testing
- Docker - Containerization

## 📈 Performance Considerations

- Token caching in Redis
- Database indexing
- Connection pooling
- Request rate limiting
- Response compression

## 🔍 Monitoring

- Request/response logging
- Error tracking
- Performance metrics
- Health check endpoint at `/health`

## 🤝 Contributing

Please read our [Contributing Guide](../../CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](../../LICENSE) file for details.
