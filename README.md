# node-typescript-mongodb
CRUD with Node.js, Typescript and MongoDB

## Routes documentation
- POST
   > /users 
    - Body { name, email, password }
    
- GET
   > /users
    - Return all users
- PATCH
  > /users
    - Body { id ** required **, name, email, password }
  
- GET
  > /users/:id
    - Return user by id
    
- DELETE
  > /users/:id
    - Remove user from database by id
