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

- Inside src directory

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

-- created a model airport with 2 parameter address,CityId
-- We got a new model file and a migration file
-- In Airport model file we set airport belong to a city.
-- In city model we did, city hasMany airport, and mentioned the Foreign Key, and add CASCADE also.
-- Also made changes in migration files.
-- and we did `npx sequelize db:migrate`
-- we have table in DB

## For creating Seeders :

`npx sequelize seed:generate --name add-airports`

-- once we make relevent changes in seed files.
-- we need to seed them
`npx sequelize db:seed:all`

### db/Model Synchronization:

- Table level sync.
- Db level sysnc

db.sequelize.sync({alter : true}); -> Db sync everytime when we restart our server, so to avoid that we made changes in .env file if its true then only is sync it.

- Medium Article : https://medium.com/@tavilesa12/dealing-with-many-to-many-associations-in-sequelize-bddc34201b80

---

# Airplane :

### STEPS:

1. `npx sequelize model:generate --name Airplane --attributes modelNumber:String,capacity:integer`
2. added constraint in model & migration file.
3. `npx sequelize db:migrate`
   -> After migration it will start reflecting in mysql DB.

- Now we create the seed file
  `npx sequelize seed:generate --name add-airplanes`
  -- once we make relevent changes in seed files.
  -- we need to seed them
  `npx sequelize db:seed:all`
  -- After Seeding all we get all the changes that we made in seeder file in our DB.

official sequelize docs for migration :
https://sequelize.org/docs/v6/other-topics/migrations
https://github.com/sequelize/cli

---

## Flights

### STEPS:

1. `npx sequelize model:generate --name Flights --attributes flightNumber:String,airplaneId:integer,departureAirportId:integer,arrivalAirportId:integer,arrivalTime:Date,departureTime:Date,price:integer,boardingGate:String,totalSeats:integer`
2. After model creation, added the constraints.
3. Migrate it `npx sequelize db:migrate`
4. Setup flight repository.
5. create Airplane repository.
6. Setup flight sevices
7. Setup flight controller
