# Remote Sensing Portal - Python Backend

Flask/Django-based REST API for the remote sensing portal.

## Prerequisites

- Python 3.8+
- pip or poetry
- PostgreSQL or MongoDB

## Setup

### Using Flask

```bash
cd backend-python
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### Configuration

Create a `.env` file:

```env
FLASK_ENV=development
FLASK_APP=app.py
DATABASE_URL=postgresql://user:password@localhost/remote_sensing
SECRET_KEY=your_secret_key_here
JWT_SECRET=your_jwt_secret_here
```

## Running the Server

```bash
flask run
```

Server will run on `http://localhost:5000`

## Project Structure

```
backend-python/
├── app/
│   ├── __init__.py
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   ├── services/         # Business logic
│   └── utils/            # Utility functions
├── migrations/           # Database migrations
├── tests/                # Unit tests
├── requirements.txt
├── config.py
└── app.py
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Imagery
- `GET /api/imagery` - List satellite imagery
- `POST /api/imagery` - Upload imagery
- `GET /api/imagery/<id>` - Get imagery details
- `DELETE /api/imagery/<id>` - Delete imagery

### Analysis
- `POST /api/analysis` - Start analysis job
- `GET /api/analysis/<id>` - Get analysis results

## Database Migrations

```bash
flask db init
flask db migrate -m "Initial migration"
flask db upgrade
```

## Testing

```bash
pytest
```

## License

MIT
