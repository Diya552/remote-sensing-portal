# Remote Sensing Portal - API Documentation

## Base URL

```
http://localhost:5000/api
```

## Authentication

All protected endpoints require a JWT token in the Authorization header:

```
Authorization: Bearer <jwt_token>
```

## Endpoints

### Authentication

#### Register User

```
POST /auth/register
Content-Type: application/json

{
  "username": "user@example.com",
  "password": "secure_password",
  "name": "John Doe"
}

Response: 201 Created
{
  "id": "uuid",
  "username": "user@example.com",
  "name": "John Doe",
  "token": "jwt_token"
}
```

#### Login

```
POST /auth/login
Content-Type: application/json

{
  "username": "user@example.com",
  "password": "secure_password"
}

Response: 200 OK
{
  "token": "jwt_token",
  "user": { ... }
}
```

### Imagery Management

#### List Imagery

```
GET /imagery
Authorization: Bearer <token>
Query Parameters:
  - page: number (default: 1)
  - limit: number (default: 20)
  - filter: string (optional)

Response: 200 OK
{
  "items": [ ... ],
  "total": 100,
  "page": 1,
  "limit": 20
}
```

#### Upload Imagery

```
POST /imagery
Authorization: Bearer <token>
Content-Type: multipart/form-data

{
  "file": <image_file>,
  "title": "Image Title",
  "description": "Image description",
  "location": {"lat": 0, "lng": 0},
  "date": "2023-08-11"
}

Response: 201 Created
{
  "id": "uuid",
  "title": "Image Title",
  "url": "/uploads/image.tif",
  ...
}
```

#### Get Imagery Details

```
GET /imagery/:id
Authorization: Bearer <token>

Response: 200 OK
{
  "id": "uuid",
  "title": "Image Title",
  "description": "...",
  "url": "/uploads/image.tif",
  "metadata": { ... },
  "createdAt": "2023-08-11T10:00:00Z"
}
```

### Analysis

#### Start Analysis

```
POST /analysis
Authorization: Bearer <token>
Content-Type: application/json

{
  "imageryId": "uuid",
  "analysisType": "ndvi",
  "parameters": { ... }
}

Response: 201 Created
{
  "id": "uuid",
  "status": "processing",
  "progress": 0,
  "createdAt": "2023-08-11T10:00:00Z"
}
```

#### Get Analysis Results

```
GET /analysis/:id
Authorization: Bearer <token>

Response: 200 OK
{
  "id": "uuid",
  "status": "completed",
  "results": { ... },
  "completedAt": "2023-08-11T10:05:00Z"
}
```

## Error Responses

### 400 Bad Request

```json
{
  "error": "Invalid request parameters",
  "details": [ ... ]
}
```

### 401 Unauthorized

```json
{
  "error": "Unauthorized",
  "message": "Invalid or missing token"
}
```

### 404 Not Found

```json
{
  "error": "Not found",
  "message": "Resource not found"
}
```

### 500 Internal Server Error

```json
{
  "error": "Internal server error",
  "message": "An unexpected error occurred"
}
```

## Rate Limiting

API endpoints are rate-limited to 1000 requests per hour per IP address.

## Pagination

List endpoints support pagination via query parameters:

- `page`: Page number (default: 1)
- `limit`: Items per page (default: 20, max: 100)

Response includes metadata:

```json
{
  "items": [ ... ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "pages": 5
  }
}
```
