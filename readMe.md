## Description
This is an Express application that provides user authentication using username and password. It includes API endpoints for user management and session handling.

## Table of Contents
1. [Installation](#installation)
2. [Running the Application](#running-the-application)
3. [API Routes](#api-routes)
4. [User Registration and Authentication](#user-registration-and-authentication)

## Installation
To install the necessary dependencies, run one of the following commands in your terminal:

```bash
yarn install
```

or 

```bash
npm install
```

### Running the Application

To start the application, use the following command:

```bash
npm start
```

The server will run on port 3000 (or the port specified in the environment variables).

## API Routes

### User Management

1. **Get Users**  
   **Endpoint:** `GET /api/users`  
   **Description:** Retrieves a list of users. You can filter the users by query parameters.  
   **Query Parameters:**  
   - `filter` (string, required): The field to filter users on (e.g., `email`, `displayName`).  
   - `value` (string, optional): The value to filter by.  
   **Response:** Returns a list of users matching the filter or all users if no filter is provided.

2. **Create User**  
   **Endpoint:** `POST /api/users`  
   **Description:** Registers a new user.  
   **Request Body:**  
   ```json
   {
     "email": "example@example.com",
     "displayName": "ExampleUser",
     "password": "yourpassword"
   }
    ```
**Response:** Returns the created user object if successful, or an error message if validation fails.
3. **Get User by ID**  
   **Endpoint:** `GET /api/users/:id`  
   **Description:** Retrieves a user by their ID.  
   **Response:** Returns the user object if found, or a 404 status if not found.

4. **Update User**  
   **Endpoint:** `PUT /api/users/:id`  
   **Description:** Updates a user's information by their ID.  
   **Request Body:**  
   ```json
   {
     "email": "newemail@example.com",
     "displayName": "NewDisplayName"
   }
    ```
   **Response:**  Returns the updated user object.

5. **Partially Update User**  
   **Endpoint:** `PATCH /api/users/:id`  
   **Description:** Partially updates a user's information by their ID.  
   **Request Body:**  
   ```json
   {
     "displayName": "UpdatedDisplayName"
   }
   ```
   **Response:** Returns the updated user object.
  
6. **Delete User**  
   **Endpoint:** `DELETE /api/users/:id`  
   **Description:** Deletes a user by their ID.  
   **Response:** Returns a 204 status code if successful.


## User Registration and Authentication

To register a new user, send a `POST` request to `/api/users` with the following JSON body:

```json
{
  "email": "user@example.com",
  "displayName": "User Name",
  "password": "yourpassword"
}
```
**Response:**  If the registration is successful, the new user object will be returned.

### Logging In

To log in, send a `POST` request to `/api/auth` with the following JSON body:

```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```
**Response:** Response: If the login is successful, you will receive a 200 OK status.

### Protected Route

To access the protected route, send a `GET` request to `/protected`. You must be logged in to access this route.

**Response:** If you are authenticated, you will receive the following message:

This is a protected route, only for logged-in users.

If you are not authenticated, you will receive a `401 Unauthorized` status.

### Logging Out

To log out, send a `POST` request to `/api/logout`. If the logout is successful, you will receive a `200 OK` status. If you are not logged in, you will receive a `401 Unauthorized` status.

