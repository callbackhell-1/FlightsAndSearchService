# Welcome to Flights Service

## Project Setup

- clone the project on your local
- Execute npm install on the same path as of your root directory of teh downloaded project
- Create a .env file in the root directory and add the following environment variable
  - PORT=3000
- Inside the src/config folder create a new file config.json and then add the following piece of json

```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

- Once you've added your db config as listed above, go to the src folder from your terminal and execute npx sequelize db:create and then execute

## DB Design

- Airplane Table
- Flight
- Airport
- City

- A flight belongs to an airplane but one airplane can be used in multiple flights
- A city has many airports but one airport belongs to a city
- One airport can have many flights, but a flight belongs to one airport

## Tables

### City -> id, name, created_at, updated_at

### Airport -> id, name, address, city_id, created_at, updated_at

     - Relationship -> City has many airports.  and Airport belongs to a city (one to many)

## Create Model using Sequelize:
* Inside src directory

1. City : `npx sequelize model:generate --name City --attributes name:String`

2. Airport : `npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer`


## Migrate to DB :

`npx sequelize db:migrate`

### Folder Structure :

- src/

  - index.js (server file)
  - controllers/
  - models/
  - middlewares/
  - services/
  - config/
  - utils/
  - repository/

- tests/[later]
- static/
- temp/

### To get all the cities :
  `localhost:3000/api/v1/city`

### To get filterd city
  `localhost:3000/api/v1/city?name=p`

## Association Steps:
-- created a model airport with 2 parameter address,ityId
-- We got a new model file and a migration file
-- In Airport model file we set airport belong to a city.
-- In city model we did, city hasMany airport, and mentioned the Foreign Key, and add CASCADE also. 
-- Also made changes in migration files.
--  and we did `npx sequelize db:migrate`
-- we have table in DB