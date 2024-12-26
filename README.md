
Micro Instagram


Table of Contents
- Features
- Tech Stack
- API Endpoints
 
  - Get all users
  - Create Post API
  - Get All Posts API
  - Get User Posts API
  
- How to Use
- Contributing

Features

- Create posts with text and image uploads.
- Fetch all users
- Fetch all posts
- Fetch user posts
- Edit user Post


Tech Stack

- Backend: Node.js, Express
- Database: PostgreSQL
- File Uploads: Cloudinary (for image uploads)

API Endpoints

1. Registration API
POST /api/users/create

Description: Create a new user by providing a name, mobile_number, and address.

Request Body:
 {
    "name": "Anuj Kumar",
    "mobile_number": "7979746435",
    "address": "Patna, Bihar, India"
  }

Response:
{
  "status": "success",
  "message": "User registered successfully!"
}

2. Login API
POST /api/login

Description: Log in with your credentials and receive a JWT token for further authentication.

Request Body:
{
  "email": "user1@example.com",
  "password": "password123"
}

Response:
{
  "status": "success",
  "token": "your_jwt_token"
}

3. Create Post API
POST /api/posts

Description: Create a new post with text and an image.

Request Body:
{
  "text": "This is my first post!",
  "image": "<image_url_or_base64>"
}

Response:
{
  "status": "success",
  "message": "Post created successfully!",
  "post": {
    "text": "This is my first post!",
    "image": "<image_url_or_base64>",
    "likes": 0,
    "createdAt": "2024-12-25T12:00:00Z"
  }
}

4. Like Post API
POST /api/posts/:postId/like

Description: Like a post by post ID.

Request Body:
{
  "postId": "5f43b88c42d9b3a8c7fae7b6"
}

Response:
{
  "status": "success",
  "message": "Post liked successfully!"
}

5. Get Posts API
GET /api/posts

Description: Get a list of all posts.

Response:
{
  "status": "success",
  "posts": [
    {
      "text": "This is my first post!",
      "image": "<image_url>",
      "likes": 10,
      "createdAt": "2024-12-25T12:00:00Z"
    },
    ...
  ]
}

6. Logout API
POST /api/logout

Description: Logout the user and invalidate the JWT token.

Response:
{
  "status": "success",
  "message": "Logged out successfully!"
}

How to Use
1. Clone this repository.
2. Install dependencies by running `npm install` in both the frontend and backend directories.
3. Set up your `.env` file in the backend with MongoDB URI and JWT secret.
4. Start the backend server using `npm start` or `node server.js`.
5. Start the frontend server using `npm start` in the frontend directory.
6. Visit `http://localhost:3000` to view the application.

Contributing
1. Fork the repository.
2. Create your feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.
