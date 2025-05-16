# ScamShield 🛡️

ScamShield is a comprehensive platform designed to protect users from online scams through education, real-time detection, and community reporting. Our mission is to create a safer online environment by leveraging AI technology and community-driven insights.

## 🌟 Features

- **AI-Powered Scam Detection**: Real-time analysis of websites and messages
- **Educational Resources**: Comprehensive guides and tutorials about common scams
- **Community Reporting**: User-driven scam reporting and verification system
- **Search Engine**: Advanced search capabilities for scam patterns and reports
- **Secure Authentication**: Robust user authentication and authorization system

## 🏗️ Architecture

```
ScamShield
├── frontend/                 # Next.js frontend application
├── services/                 # Microservices
│   ├── api-gateway/         # API Gateway service
│   ├── auth-service/        # Authentication service
│   ├── reporting-service/   # Scam reporting service
│   ├── ai-service/         # AI detection service
│   └── search-service/     # Search functionality service
├── ai/                      # AI models and training
├── infra/                   # Infrastructure as Code (Terraform)
└── docs/                    # Project documentation
```

## 🚀 Tech Stack

### Frontend

- Next.js with TypeScript
- Tailwind CSS for styling
- Radix UI for accessible components
- shadcn/ui for beautiful UI components

### Backend

- Node.js/Express with TypeScript
- Microservices architecture
- Docker for containerization
- MongoDB for data storage
- Redis for caching

### Infrastructure

- AWS (EC2, RDS, S3, etc.)
- Terraform for IaC
- GitHub Actions for CI/CD

## 🛠️ Prerequisites

- Node.js (v18 or higher)
- Docker and Docker Compose
- AWS CLI configured
- Terraform CLI
- MongoDB
- Redis

## 🏁 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/20was/scamshield.git
   cd scamshield
   ```

2. **Install dependencies**

   ```bash
   # Install frontend dependencies
   cd frontend
   npm install

   # Install service dependencies
   cd ../services
   for service in */; do
     cd $service
     npm install
     cd ..
   done
   ```

3. **Set up environment variables**

   ```bash
   # Copy example env files
   cp .env.example .env
   ```

4. **Start development environment**

   ```bash
   docker-compose up -d
   ```

5. **Run the application**

   ```bash
   # Start frontend
   cd frontend
   npm run dev

   # Start services
   cd ../services
   npm run dev
   ```

## 📚 Documentation

Detailed documentation for each component can be found in their respective directories:

- [Frontend Documentation](./frontend/README.md)
- [API Gateway Documentation](./services/api-gateway/README.md)
- [Auth Service Documentation](./services/auth-service/README.md)
- [Reporting Service Documentation](./services/reporting-service/README.md)
- [AI Service Documentation](./services/ai-service/README.md)
- [Search Service Documentation](./services/search-service/README.md)
- [Infrastructure Documentation](./infra/README.md)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔐 Security

If you discover any security-related issues, please email security@scamshield.com instead of using the issue tracker.

## 🙏 Acknowledgments

- Thanks to all contributors who have helped make ScamShield better
- Special thanks to the open-source community for their amazing tools and libraries
