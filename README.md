# Fullstack Blog

Backend

### Database

- Set up a PostgreSQL database, remember you can do it locally or in Neon
- Create a posts table with at least the following fields, feel free to add more if needed
- **id:** (Primary key, auto-incrementing integer.)
- **author:** (title: Text field for the post title, can’t be NULL.)
- **content:** (Text field for the post content, can’t be NULL.)
- **cover:** (Text field for the image cover, can’t be NULL.)
- **date** (Date field, defaults to the creation time.)

### Backend

- Set up a Node.js server using the built-in http module.
- Use the pg package to connect to your PostgreSQL database.
- Create the following endpoints for the posts resource:
- **GET /posts:** Retrieve all posts.
- **GET /posts/:id** Retrieve a single post by ID.
- **POST /posts:** Create a new post.
- **PUT /posts/:id** Update an existing post by ID.
- **DELETE /posts/:id:** Delete a post by ID

# Backend API

### GET /posts

##### Description: Retrieve all posts.

##### Response: A JSON array of all posts

### GET /posts/postId

##### Description: Retrieve a single post by ID.

##### Response: A JSON object of the post.

### POST /posts

##### Description: Create a new post.

##### Request Body: JSON object with post fields.

##### Response: The newly created post as a JSON object.

### PUT /posts/postId

##### Description: Update an existing post by ID.

##### Request Body: JSON object with post fields.

##### Response: The updated post as a JSON object.

### DELETE /posts/postId

##### Description: Delete a post by ID.

##### Response: A success message or the deleted post as a JSON object.

### Contributions

- [Julia](https://github.com/juliabaur)
- [Anne](https://github.com/AnneMerlyn)
- [Maksim](https://github.com/MaksimShupta)
- [Andrei](https://github.com/raizy21)

are maintainers for this repository.

# Project Resources

- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [The HTTP module](https://www.w3schools.com/nodejs/nodejs_http.asp)
- [Connecting to a Database](https://www.mongodb.com/de-de/lp/cloud/atlas/try4?utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_general_prosp-nbnon_gic-null_emea-de_ps-all_desktop_deu_lead&utm_term=datenbankverwaltungssystem&utm_medium=cpc_paid_search&utm_ad=p&utm_ad_campaign_id=20985229573&adgroup=156968602223&cq_cmp=20985229573&gad_source=1&gclid=Cj0KCQiA2oW-BhC2ARIsADSIAWrwnUOL63cM-gkObt1ompuLqyqqanDpoQraGjsPKjr1hOkusCgz6UAaAtWqEALw_wcB)
- [pg Package Documentation](https://node-postgres.com/)
