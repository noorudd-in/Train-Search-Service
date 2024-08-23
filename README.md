# Train Ticketing - Search Service

This is the Search Service for the Train Ticketing application, where users can search for train routes based on their desired journey details.

# Note
This service is a part of microservice architecture that also includes:
- Auth Service: Handles user registration and login.
- Booking Service: Manages ticket bookings.
- API Gateway: Orchestrates requests across all microservices.

Running this single micro-service will not be beneficial. Kindly visit [main repository](https://github.com/noorudd-in/Train-Ticketing-Backend) and run all the required micro-services mentioned there. This readme will guide you how to run search service.

# Installation
1. Clone the repository:
2. Install dependencies:\
`npm install`
3. Setup your MySQL Databases. Inside `src/config/config.json`\
Replace `username` and `password` with your actual MySQL connection.\
Replace `database` with the name of the database for the search service. If the database is not created, sequelize will automatically create it for you.
4. Start your MySQL in the background. By default MySQL uses port 3306. If your MySQL is running on different port, you can modify the `host` and `port` inside the `src/config/config.json`
5. Create the database mentioned in `config.json` using sequelize. Make sure you are under `src` folder before executing any sequelize command.
```js
cd src
npx sequelize db:create
```
6. Create tables for our search service defined in the models folder. Make sure you are inside `src` folder.\
`npx sequelize db:migrate`
7. Add dummy data to all our tables using seeders. Run the following command inside your `src` folder:\
`npx sequelize db:seed --seed 20240810101559-add-trains`
8. This will add the dummy data which is available inside `src/seeders/` folder to our tables. Similarly add the dummy data for stations and schedules too.\
`npx sequelize db:seed --seed 20240810101606-add-stations 20240810101012-add-schedules`
9. Make sure you are importing `trains` and `stations` data before `schedules` as schedule's foreign key refers to primary keys of trains and stations.
10. Now start your application using\
`npm start`. By default the search service will start on\
`http://localhost:1440`

# API Endpoints
## Public Routes
**GET /search/api/v1/train/:id** - Fetch a specific train details based on train id.

**GET /search/api/v1/trains** - Fetch all available trains.

**GET /search/api/v1/station/:id** - Fetch a specific station details based on station id.

**GET /search/api/v1/stations** - Fetch all available stations.

**GET /search/api/v1/search?from='Mumbai'&to='Pune'** - Fetch a route and train details from source to destination.

## User Routes
**POST /search/api/v1/schedule/:id** - Fetch schedule details.

**POST /search/api/v1/train/:number** -> Updates seat details once user book a ticket.

**POST /search/api/v1/seats/:number** -> Fetch seats available in a train.

## Admin Routes
**POST /search/api/v1/train** - Create a new train.

**PATCH /search/api/v1/train/id** - Update a train.

**DELETE /search/api/v1/train/id** - Delete a train.

**POST /search/api/v1/station** - Create a new station.

**PATCH /search/api/v1/station/id** - Update a station.

**DELETE /search/api/v1/station/id** - Delete a station.

**POST /search/api/v1/schedule** - Create a new schedule.

**PATCH /search/api/v1/schedule/id** - Update a schedule.

**DELETE /search/api/v1/schedule/id** - Delete a schedule.

**GET /search/api/v1/schedules** - Fetch all the available schedules.

# Dependencies
- Mysql2: MySQL database driver.
- Sequelize: ORM for interacting with the MySQL database.
- Express: Web framework for building the API.
- Axios: HTTP client for making API requests.
- dotenv: Loads environment variables from a .env file.

# Dev Dependencies
- nodemon: Automatically restarts the server on file changes during development.
- sequelize-cli: Command-line interface for Sequelize. It helps to create models, configs, migrations, seeders very easily.

# API/Code Flow
When a user sends a request to the server, the flow is as follows::
- Middleware: The request first passes through the middleware, where it is validated. Here, checks are performed to ensure that required parameters are available. If the parameters are missing or invalid, the request is terminated, and an error response is sent back to the client. If validation is successful, the request is forwarded to
- Controller: The controller receives the validated request and handles any modifications, such as data transformation or mapping. It then forwards the request to
- Service: The service layer contains the core business logic. For example, this is where you might check if a user is authenticated before allowing a ticket booking. After processing the logic, the service layer sends the request to
- Repository: The repository is responsible for database operations. Here, SQL queries are executed to perform CRUD operations. For example, if the request is to create a new ticket, the repository handles the SQL commands and performs the necessary interactions with the database.

# Contributing
Contributions are welcome! Please create an issue or submit a pull request.

# License
MIT