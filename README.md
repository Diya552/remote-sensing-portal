# Remote Sensing Portal

A comprehensive web-based platform for accessing, visualizing, and analyzing satellite imagery and geospatial data.

## Features

- 🗺️ Interactive map interface with Leaflet/Mapbox
- 📡 Satellite imagery viewer
- 📊 Geospatial data analysis tools
- 👤 User authentication and management
- 💾 Multi-database support (PostgreSQL, MongoDB)
- 🔗 RESTful API
- 📈 Real-time data processing

## Tech Stack

### Frontend
- **React** - UI framework
- **Leaflet / Mapbox** - Interactive mapping
- **Redux / Context API** - State management
- **Axios** - HTTP client

### Backend Options
- **Python** - Flask or Django
- **Node.js** - Express.js

### Database
- **PostgreSQL** - Relational database
- **MongoDB** - NoSQL database

## Project Structure

```
remote-sensing-portal/
├── frontend/                 # React application
├── backend-python/          # Python/Flask backend
├── backend-nodejs/          # Node.js/Express backend
├── docker-compose.yml       # Docker orchestration
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 16+ (for frontend)
- Python 3.8+ (for Python backend)
- Docker & Docker Compose
- Git

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/Diya552/remote-sensing-portal.git
   cd remote-sensing-portal
   ```

2. Choose your backend option and follow the setup instructions in the respective backend folder

3. For frontend setup, see [frontend/README.md](./frontend/README.md)

4. Using Docker Compose:
   ```bash
   docker-compose up
   ```

## Documentation

- [Frontend Documentation](./frontend/README.md)
- [Python Backend Documentation](./backend-python/README.md)
- [Node.js Backend Documentation](./backend-nodejs/README.md)
- [API Documentation](./docs/API.md)
- [Database Schema](./docs/DATABASE.md)

## License

MIT License - feel free to use this for your projects!

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.
