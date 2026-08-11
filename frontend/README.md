# Remote Sensing Portal - Frontend

React-based web interface for the remote sensing portal.

## Prerequisites

- Node.js 16+
- npm or yarn

## Setup

```bash
cd frontend
npm install
```

## Configuration

Create a `.env` file in the frontend directory:

```env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_MAPBOX_TOKEN=your_mapbox_token_here
```

## Development

```bash
npm start
```

The application will open at `http://localhost:3000`

## Build

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # React components
│   ├── MapViewer/      # Map interface component
│   ├── ImageryPanel/   # Satellite imagery viewer
│   ├── Dashboard/      # Main dashboard
│   └── ...
├── pages/              # Page components
├── services/           # API calls
├── hooks/              # Custom React hooks
├── store/              # Redux/Context state management
├── styles/             # CSS/SCSS files
├── utils/              # Utility functions
└── App.js
```

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## Mapping Libraries

### Leaflet Setup

```bash
npm install leaflet react-leaflet
```

### Mapbox Setup

```bash
npm install mapbox-gl react-map-gl
```

## Dependencies

Key libraries:
- `leaflet` / `mapbox-gl` - Mapping
- `axios` - HTTP requests
- `redux` - State management
- `react-router-dom` - Routing

## License

MIT
