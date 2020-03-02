# node-typescript-mongodb
CRUD with Typescript and MongoDB

## Routes documentation
- POST
   > /users 
    > Body { name, email, password }
    
- GET
   > /users
    > Return all users
- PATCH
  > /users
    > Body { id * required *, name, email, password }
  
- GET
  > /users/:id
    > return user by id
    
- DELETE
  > /users/:id
    > remove user from database by id
