# Venuee

A web application that helps users easily find and book local event spaces based on desired date and party size.

![venuee main](readmeImgs/main.png)

## API Endpoints

| API                                                  | Method  | Endpoint                           |  Status |
| :--------------------------------------------------- | :------ | :--------------------------------- | ------: |
| 📝 Users                                             |
| [Register User](#registerUser)                       | POST    | /user/register                     |     201 |
| [User Login](#userLogin)                             | POST    | /user/login                        |     200 |
| [Get User Profile](#getUser)                          | GET     | /user/find                          |     200 |
| [Delete User Profile](#deleteUser)                    | DELETE  | /user/find                          |     204 |
| 🧑‍🏫 Vendors                                           |
| [Register Vendor](#registerVendor)                   | POST    | /vendor/register                   |     201 |
| [Vendor Login](#vendorLogin)                         | POST    | /vendor/login                      |     200 |
| [Get Vendor Profile](#getVendorProfile)                | GET     | /vendor/find                        |     200 |
| [Get Vendor By Name](#getVendorByName)               | POST    | /vendor/name                       |     200 |
| [Get Available Vendors](#getAvailableVendors)        | GET     | /vendor/availability               |     200 |
| 🙋‍♀️ Reservations                                      |
| [Create User Reservation](#createUserReservation)    | POST    | /reservation/                      |     200 |
| [Create Vendor Reservation](#createVendorReservation)| POST    | /reservation/unavailable           |     200 |
| [Get A User's Reservations](#getUserReservations)    | GET     | /reservation/user                  |     200 |
| [Get A Vendor's Reservatiosn](#getVendorReservations)| GET     | /reservation/vendor                |     200 |
| [Delete Reservation](#deleteReservationById)         | DELETE  | /reservation/delete/:id            |     200 |

![register](readmeImgs/register.png)
  
### Used Tech Stack
  
## Frontend
- React Framework
- CSS for styling

## Backend
- Node.js with Express.js for the Server
- JWT for authentication
- Postgresql and Sequelize as the Database

### Getting Started

## Frontend
- To start up the frontend, change directory into client folder and run:
```npm start```
- Following the example in .env.example, add your credentials to the .env file
## Backend
- To start the server, change directory into server folder and run:
```node seed```
- Then run
```nodemon --> starts the node express server```
- Following the example in .env.example, add your credentials to the .env file

node seed
index.js change force: from false to true if you want to wipe the data
## Database
- After starting the server, the database should be connected
- 

- Make sure you have Node.js installed on your local machine
- 'npm install' dependencies
- Update the .env files with your information
- Make sure you're connected to postgresql
  (you can use pgAdmin4 to visualize the data)
- Run the command 'node seed' in the server to autofill the database with seed data
- Then use the command 'nodemon' in the server folder to start the server
- And use the command 'npm start' in the client folder to open the page in the browser

### Credit
Venuee was built by Ammar Khomusi, Nicolás Ogno Aguad, Tyler Wells, Mike Kaib, and Ash Mudra
