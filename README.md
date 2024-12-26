
# Micro Instagram API Documentation

## This project includes a set of REST APIs that allow you to manage users and posts. You can interact with these APIs through Postman by importing the provided Postman collection.

## API Endpoints

### 1. User Creation API
**POST** `/api/users/create`

**Description**: Create a new user by providing a name, mobile_number, and address.

**Request Body**:
```json
{
  "name": "Anuj Kumar",
  "mobile_number": "7979746435",
  "address": "Patna, Bihar, India"
}
```

**Response**:
```json
{
  "message": "User created successfully",
  "user": {
    "post_count": 0,
    "id": 37,
    "name": "Anuj",
    "mobile_number": "8007004205",
    "address": "Shimla, Himachal Pradesh, India",
    "updatedAt": "2024-12-26T08:30:45.819Z",
    "createdAt": "2024-12-26T08:30:45.819Z"
  }
}
```

### 2. Get All Users API
**GET** `/api/users`

**Description**: Get a list of all users.

**Response**:
```json
{
  "message": "All users fetched",
  "count": 21,
  "data": [
    {
      "id": 3,
      "name": "Priya Singh",
      "mobile_number": "8765432190",
      "address": "Lucknow, Uttar Pradesh, India",
      "post_count": 0,
      "createdAt": "2024-12-26T06:48:53.863Z",
      "updatedAt": "2024-12-26T06:48:53.863Z"
    }
  ]
}
```

### 3. Create Post API
**POST** `/api/posts/create`

**Description**: Create a new post with title, description, and images.

**Request Body**:
```json
{
  "userId": 37,
  "title": "post 1",
  "description": "The perfect lighting to capture moments during golden hour.",
  "images": [
    "https://plus.unsplash.com/premium_photo-1669047670905-fa4331d07e06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBwaG90b3N8ZW58MHx8MHx8fDA%3D"
  ]
}
```

**Response**:
```json
{
  "message": "Post created successfully",
  "post": {
    "id": 7,
    "title": "post 1",
    "description": "The perfect lighting to capture moments during golden hour.",
    "user_id": 37,
    "images": [
      "https://res.cloudinary.com/dpc1rowz8/image/upload/v1735221921/micro_insta_posts/fjjqkd7d2ra26b5po6c2.jpg"
    ],
    "updatedAt": "2024-12-26T08:35:22.288Z",
    "createdAt": "2024-12-26T08:35:22.288Z"
  }
}
```

### 4. Get All Posts API
**GET** `/api/posts`

**Description**: Get a list of all posts.

**Response**:
```json
{
  "success": true,
  "message": "Posts fetched successfully",
  "count": 6,
  "data": [
    {
      "id": 1,
      "title": "My first post creation check",
      "description": "hi this is Anuj checking the post create route",
      "user_id": 1,
      "images": [
        "https://res.cloudinary.com/dpc1rowz8/image/upload/v1735216101/micro_insta_posts/lypvhjqdq3e51fu83gzz.jpg"
      ],
      "createdAt": "2024-12-26T06:58:21.446Z",
      "updatedAt": "2024-12-26T06:58:21.446Z",
      "user": {
        "id": 1,
        "name": "Anuj Kumar",
        "mobile_number": "7979746435",
        "address": "Patna, Bihar",
        "post_count": 4,
        "createdAt": "2024-12-26T06:47:05.916Z",
        "updatedAt": "2024-12-26T07:09:43.980Z"
      }
    }
  ]
}
```

### 5. Get Specific User All Posts API
**GET** `/api/posts/userId`

**Description**: Fetch all the posts of a user.

**Response**:
```json
{
  "message": "Post fetched",
  "count": 1,
  "data": [
    {
      "id": 5,
      "title": "My second post creation check",
      "description": "hi this is user2 checking the post create route",
      "user_id": 2,
      "images": [
        "https://res.cloudinary.com/dpc1rowz8/image/upload/v1735216993/micro_insta_posts/oklhz4wfubiom3ng0pta.jpg"
      ],
      "createdAt": "2024-12-26T07:13:13.201Z",
      "updatedAt": "2024-12-26T07:13:13.201Z",
      "user": {
        "name": "Ravi Sharma"
      }
    }
  ]
}
```

### 6. Delete a User Post by its ID API
**DELETE** `/api/posts/userId/postId`

**Description**: Delete post by userId and postId.

**Response**:
```json
{
  "message": "Post deleted successfully.",
  "data": {
    "id": 5,
    "title": "My second post creation check",
    "description": "hi this is user2 checking the post create route",
    "user_id": 2,
    "images": [
      "https://res.cloudinary.com/dpc1rowz8/image/upload/v1735216993/micro_insta_posts/oklhz4wfubiom3ng0pta.jpg"
    ],
    "createdAt": "2024-12-26T07:13:13.201Z",
    "updatedAt": "2024-12-26T07:13:13.201Z"
  }
}
```

### 7. Edit a User Post by its ID API
**PUT** `/api/posts/userId/postId`

**Description**: Edit post by userId and postId.

**Request Body**:
```json
{
  "title": "This is edit check",
  "description": "updated description",
  "images": [
    "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg"
  ]
}
```

**Response**:
```json
{
  "message": "Post updated successfully.",
  "data": {
    "id": 4,
    "title": "This is edit check",
    "description": "updated description",
    "user_id": 1,
    "images": [
      "https://res.cloudinary.com/dpc1rowz8/image/upload/v1735222473/micro_insta_posts/lk8tehpsm7wylblh8gt2.jpg"
    ],
    "createdAt": "2024-12-26T07:09:43.643Z",
    "updatedAt": "2024-12-26T14:14:35.045Z"
  }
}
```

## How to Use

1. Clone this repository.
2. Install dependencies by running `npm install`.
3. Set up your `.env` file in the backend with the PostgreSQL URI.
4. Start the backend server using `npm start` or `node server.js`.
