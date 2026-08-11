# Remote Sensing Portal - Database Schema

## Overview

The portal supports both PostgreSQL and MongoDB. Use PostgreSQL for relational data and MongoDB for flexible document storage.

## PostgreSQL Schema

### Users Table

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  full_name VARCHAR(255),
  avatar_url VARCHAR(500),
  bio TEXT,
  role VARCHAR(50) DEFAULT 'user',
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_login TIMESTAMP
);
```

### Imagery Table

```sql
CREATE TABLE imagery (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  file_path VARCHAR(500) NOT NULL,
  file_size BIGINT,
  mime_type VARCHAR(100),
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  acquisition_date DATE,
  sensor_type VARCHAR(100),
  resolution INT,
  bands INTEGER,
  metadata JSONB,
  is_public BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
```

### Analysis Jobs Table

```sql
CREATE TABLE analysis_jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  imagery_id UUID NOT NULL REFERENCES imagery(id),
  user_id UUID NOT NULL REFERENCES users(id),
  analysis_type VARCHAR(100) NOT NULL,
  parameters JSONB,
  status VARCHAR(50) DEFAULT 'pending',
  progress INT DEFAULT 0,
  results JSONB,
  error_message TEXT,
  started_at TIMESTAMP,
  completed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (imagery_id) REFERENCES imagery(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
```

### Indexes

```sql
CREATE INDEX idx_imagery_user_id ON imagery(user_id);
CREATE INDEX idx_imagery_acquisition_date ON imagery(acquisition_date);
CREATE INDEX idx_analysis_imagery_id ON analysis_jobs(imagery_id);
CREATE INDEX idx_analysis_status ON analysis_jobs(status);
```

## MongoDB Collections

### Users Collection

```javascript
db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["username", "email", "password_hash"],
      properties: {
        _id: { bsonType: "objectId" },
        username: { bsonType: "string" },
        email: { bsonType: "string" },
        password_hash: { bsonType: "string" },
        full_name: { bsonType: "string" },
        avatar_url: { bsonType: "string" },
        bio: { bsonType: "string" },
        role: { bsonType: "string", enum: ["user", "admin", "scientist"] },
        is_active: { bsonType: "bool" },
        created_at: { bsonType: "date" },
        updated_at: { bsonType: "date" },
        last_login: { bsonType: "date" }
      }
    }
  }
});

db.users.createIndex({ username: 1 }, { unique: true });
db.users.createIndex({ email: 1 }, { unique: true });
```

### Imagery Collection

```javascript
db.createCollection("imagery", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["user_id", "title", "file_path"],
      properties: {
        _id: { bsonType: "objectId" },
        user_id: { bsonType: "objectId" },
        title: { bsonType: "string" },
        description: { bsonType: "string" },
        file_path: { bsonType: "string" },
        file_size: { bsonType: "long" },
        mime_type: { bsonType: "string" },
        location: {
          bsonType: "object",
          properties: {
            type: { bsonType: "string", enum: ["Point"] },
            coordinates: { bsonType: "array" }
          }
        },
        acquisition_date: { bsonType: "date" },
        sensor_type: { bsonType: "string" },
        resolution: { bsonType: "int" },
        bands: { bsonType: "int" },
        metadata: { bsonType: "object" },
        is_public: { bsonType: "bool" },
        created_at: { bsonType: "date" },
        updated_at: { bsonType: "date" }
      }
    }
  }
});

db.imagery.createIndex({ user_id: 1 });
db.imagery.createIndex({ "location": "2dsphere" });
db.imagery.createIndex({ acquisition_date: 1 });
```

### Analysis Jobs Collection

```javascript
db.createCollection("analysis_jobs", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["imagery_id", "user_id", "analysis_type"],
      properties: {
        _id: { bsonType: "objectId" },
        imagery_id: { bsonType: "objectId" },
        user_id: { bsonType: "objectId" },
        analysis_type: { bsonType: "string" },
        parameters: { bsonType: "object" },
        status: { bsonType: "string", enum: ["pending", "processing", "completed", "failed"] },
        progress: { bsonType: "int" },
        results: { bsonType: "object" },
        error_message: { bsonType: "string" },
        started_at: { bsonType: "date" },
        completed_at: { bsonType: "date" },
        created_at: { bsonType: "date" }
      }
    }
  }
});

db.analysis_jobs.createIndex({ imagery_id: 1 });
db.analysis_jobs.createIndex({ status: 1 });
```

## Migration Strategy

Support both databases simultaneously:

1. **Primary DB**: PostgreSQL for core relational data
2. **Secondary DB**: MongoDB for flexible metadata and analysis results
3. **Sync Layer**: Keep data synchronized between databases

## Connection Strings

### PostgreSQL

```
postgresql://username:password@host:5432/remote_sensing
```

### MongoDB

```
mongodb://username:password@host:27017/remote_sensing
```
