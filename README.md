# Fiction Addicts /Book Blog Management API Server

This project is a Node.js Express API server designed for managing book posts.

### Contributions

- [Julia](https://github.com/juliabaur)
- [Anne](https://github.com/AnneMerlyn)
- [Maksim](https://github.com/MaksimShupta)
- [Andrei](https://github.com/raizy21)

are maintainers for this repository.

## Prerequisites

Before running this server, ensure you have the following installed:

- [nodejs](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Installation

1. Clone the repository:

   ```bash
   git@github.com:MaksimShupta/FullstackBlog_backend.git
   cd FullstackBlog_backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Running the Server

To start the server, run the following command:

```bash
npm run dev
```

The server will start running at [http://localhost:8080](http://localhost:8080)



## API Documentation

The API endpoints are documented.Here’s how to access it:

## API Endpoints

The following endpoints are available:

### Posts

- **POST /api/posts** Create a new post.
- **GET /api/posts** Get all posts.
- **GET /api/posts/:id** Get a single post by ID.
- **PUT /api/posts/:id** Update an existing post.
- **DELETE /api/posts/:id** Delete an post by ID.

## Configuration

Environment-specific configurations are set in `.env` file. This file is not available.

Create a new `.env` file, you may add the following variable the `DATABASE_URL` and `PORT` values.

## Backend

- Set up a Node.js server using the built-in http module in package.json.
  `"type": "module",`

- The pg package connect your PostgreSQL database.
  Variable db , create new instance Pool. Poll coming from pg.

  - db test database connection on startup. Print `"connected db"` if client is connected or `"error db", err.message` if connection do not work.

## Database

We use [Neon](https://console.neon.tech/) with postgresql.

Set the following queries in [Neon](https://console.neon.tech/).

- CREATE TABLE IF NOT EXISTS posts (
  id SERIAL PRIMARY KEY,
  author VARCHAR(255) NOT NULL,
  title VARCHAR(510) NOT NULL,
  content VARCHAR(510) NOT NULL,
  cover VARCHAR(510) NOT NULL,
  category VARCHAR(255) NOT NULL,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  createAT TIMESTAMP WITH TIME ZONE,
  updatedAT TIMESTAMP WITH TIME ZONE
  )

- DROP TABLE IF EXISTS posts;

- SELECT \* FROM posts;

- INSERT INTO posts (author,title, content, cover, category)
  VALUES ('author','title', 'content', 'cover' , ' category')



  
# Backend API

### GET /posts

- Description: Retrieve all posts.

- Response: A JSON array of all posts

### GET /posts/postId

- Description: Retrieve a single post by ID.

- Response: A JSON object of the post.

### POST /posts

- Description: Create a new post.

- Request Body: JSON object with post fields.

- Response: The newly created post as a JSON object.

### PUT /posts/postId

- Description: Update an existing post by ID.

- Request Body: JSON object with post fields.

- Response: The updated post as a JSON object.

### DELETE /posts/postId

- Description: Delete a post by ID.

- Response: A success message or the deleted post as a JSON object.

## Dependencies

- [Express.js](https://expressjs.com/) is a fast, minimalist web framework for Node.js that simplifies building APIs and web applications.
- [Dotenv](https://www.npmjs.com/package/dotenv) is a Node.js package that loads environment variables from a .env file into process.env for secure configuration management.
- [pg](https://www.npmjs.com/package/pg) is a PostgreSQL client for Node.js that enables seamless interaction with PostgreSQL databases using JavaScript.
- [cors](https://www.npmjs.com/package/cors) (Cross-Origin Resource Sharing) is a middleware for Node.js that enables secure cross-origin requests in web applications.

# Project Resources

- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [The HTTP module](https://www.w3schools.com/nodejs/nodejs_http.asp)
- [Connecting to a Database](https://www.mongodb.com/de-de/lp/cloud/atlas/try4?utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_general_prosp-nbnon_gic-null_emea-de_ps-all_desktop_deu_lead&utm_term=datenbankverwaltungssystem&utm_medium=cpc_paid_search&utm_ad=p&utm_ad_campaign_id=20985229573&adgroup=156968602223&cq_cmp=20985229573&gad_source=1&gclid=Cj0KCQiA2oW-BhC2ARIsADSIAWrwnUOL63cM-gkObt1ompuLqyqqanDpoQraGjsPKjr1hOkusCgz6UAaAtWqEALw_wcB)
- [pg Package Documentation](https://node-postgres.com/)
