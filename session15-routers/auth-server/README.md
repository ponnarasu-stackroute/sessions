# Authentication Server for Keep

## How to use?

- Clone this repository into your local machine.

- First get into the `Authentication-Server` folder using terminal or command prompt

- Use command `npm install` to install the dependencies.

- Start the server using the command `npm start` from within the server folder.

## Credentials for Login

- The username and password to be used is 

  ```
  Username: admin
  Password: password
  ```

## Routes available currently

### Auth Routes
- POST request

  `http://localhost:3000/auth/v1`
  
  Request Body will have `username` and `password` fields.

  Returns an object with `token` field and its value.

- POST request 

  `http://localhost:3000/auth/v1/isAuthenticated`.
  
  Pass the token as a Bearer Token in the Authorization header.

  Returns an object with field `isAuthenticated` and its value as a boolean (true or false).


### API Routes
Note: - `All the below requests need the Bearer Token to be added in the Authorization header.`


- GET request to get all the notes

  `http://localhost:3000/api/v1/notes`

- POST request

  `http://localhost:3000/api/v1/notes`

  Body can be
  ```
  {
    title: 'Some Title',
    text: 'Some Text'
  }
  ```
  `id is generated automatically.`

- PUT request

  `http://localhost:3000/api/v1/notes/:id`

  Body can be
  ```
  {
    title: 'Some Title',
    text: 'Some Text'
  }
  ```

- DELETE request
  
  `http://localhost:3000/api/v1/notes/:id`