# Search Service 🔍

The Search Service provides powerful search capabilities for the ScamShield platform, enabling users to find scam reports, educational content, and related information quickly and efficiently. It uses Elasticsearch for advanced search functionality and real-time indexing.

## 🎯 Features

- **Full-Text Search**: Advanced text search capabilities
- **Fuzzy Matching**: Handle typos and similar terms
- **Faceted Search**: Filter results by multiple criteria
- **Real-time Indexing**: Immediate search availability
- **Suggestions**: Search suggestions and autocomplete
- **Highlighting**: Highlight matching terms in results
- **Aggregations**: Statistical analysis of search results
- **Synonyms**: Handle different terms for the same concept

## 🏗️ Architecture

```
Search Service
├── src/
│   ├── config/           # Configuration files
│   ├── controllers/      # Request handlers
│   ├── middleware/       # Custom middleware
│   ├── models/          # Search models
│   ├── routes/          # Route definitions
│   ├── services/        # Business logic
│   ├── utils/           # Utility functions
│   └── app.ts           # Main application file
├── elasticsearch/        # Elasticsearch configuration
│   ├── mappings/        # Index mappings
│   ├── settings/        # Index settings
│   └── templates/       # Index templates
├── tests/               # Test files
└── package.json         # Dependencies and scripts
```

## 🔧 Configuration

Create a `.env` file with the following variables:

```env
# Server Configuration
PORT=3004
NODE_ENV=development

# Elasticsearch Configuration
ELASTICSEARCH_URL=http://elasticsearch:9200
ELASTICSEARCH_USER=elastic
ELASTICSEARCH_PASSWORD=password
ELASTICSEARCH_INDEX_PREFIX=scamshield

# Redis Configuration
REDIS_URL=redis://redis:6379

# Search Configuration
MAX_SEARCH_RESULTS=100
SUGGESTION_LIMIT=10
CACHE_TTL=3600
```

## 🚀 Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start Elasticsearch**

   ```bash
   docker-compose up elasticsearch
   ```

3. **Initialize indices**

   ```bash
   npm run init-indices
   ```

4. **Start development server**

   ```bash
   npm run dev
   ```

5. **Run tests**
   ```bash
   npm test
   ```

## 📚 API Documentation

### Search Endpoints

- `GET /api/search`

  - Search content
  - Query params: `{ q, page, limit, filters }`
  - Response: `{ results, total, page, limit }`

- `GET /api/search/suggestions`

  - Get search suggestions
  - Query params: `{ q, limit }`
  - Response: `{ suggestions }`

- `POST /api/search/advanced`
  - Advanced search
  - Request body: `{ query, filters, sort, page, limit }`
  - Response: `{ results, total, page, limit }`

### Index Management Endpoints

- `POST /api/index`

  - Index new document
  - Request body: `{ type, document }`
  - Response: `{ success: true }`

- `PUT /api/index/:id`

  - Update indexed document
  - Request body: `{ type, document }`
  - Response: `{ success: true }`

- `DELETE /api/index/:id`
  - Delete indexed document
  - Response: `{ success: true }`

## 📊 Index Structure

### Reports Index

```typescript
interface ReportDocument {
  id: string;
  title: string;
  description: string;
  category: string;
  status: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  // Search-specific fields
  _search: {
    title: string;
    description: string;
    category: string;
    tags: string[];
  };
}
```

## 🔄 Dependencies

- Elasticsearch - Search engine
- Node.js - Runtime
- TypeScript - Type safety
- Express.js - Web framework
- Redis - Caching
- Docker - Containerization

## 📈 Performance Considerations

- Index optimization
- Query caching
- Result pagination
- Bulk indexing
- Shard management
- Cache invalidation

## 🔍 Monitoring

- Search performance metrics
- Index statistics
- Query logging
- Error tracking
- Health check endpoint at `/health`

## 🔒 Security Features

- Input validation
- Rate limiting
- Access control
- Secure Elasticsearch configuration
- Audit logging

## 📈 Scaling Considerations

- Index sharding
- Replica management
- Load balancing
- Cache distribution
- Resource allocation

## 🤝 Contributing

Please read our [Contributing Guide](../../CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](../../LICENSE) file for details.
