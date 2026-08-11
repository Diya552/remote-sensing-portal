# Remote Sensing Portal - Node.js Backend

Express.js-based REST API for the remote sensing portal.

## Prerequisites

- Node.js 16+
- npm or yarn
- PostgreSQL or MongoDB

## Setup

```bash
cd backend-nodejs
npm install
```

### Configuration

Create a `.env` file:

```env
NODE_ENV=development
PORT=5000
DATABASE_URL=postgresql://user:password@localhost/remote_sensing
MONGODB_URL=mongodb://localhost:27017/remote_sensing
JWT_SECRET=your_jwt_secret_here
```

## Running the Server

```bash
npm start
```

Server will run on `http://localhost:5000`

## Development

```bash
npm run dev
```

## Project Structure

```
backend-nodejs/
├── src/
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   ├── controllers/       # Request handlers
│   ├── middleware/        # Custom middleware
│   ├── services/          # Business logic
│   └── utils/             # Utility functions
├── tests/                 # Unit tests
├── package.json
└── server.js
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Imagery
- `GET /api/imagery` - List satellite imagery
- `POST /api/imagery` - Upload imagery
- `GET /api/imagery/:id` - Get imagery details
- `DELETE /api/imagery/:id` - Delete imagery

### Analysis
- `POST /api/analysis` - Start analysis job
- `GET /api/analysis/:id` - Get analysis results

## Database

### Running Migrations

```bash
npm run migrate
```

## Testing

```bash
npm test
```

## License

MIT
