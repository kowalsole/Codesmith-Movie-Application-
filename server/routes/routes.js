// import express from "express";
// import {
//   getAllEntertainment,
//   getEntertainmentById,
//   getEntertainmentPhotoById,
//   getEntertainmentsByName,
//   getEntertainmentTrailerById,
//   getWhereStreamingByTitle,
// } from "../controller/moviesController.js";

// const router = express.Router();

// router.get("/", getAllEntertainment);
// router.get("/:name", getEntertainmentsByName);
// router.get("/info/:id", getEntertainmentById);
// router.get("/streaming/:name", getWhereStreamingByTitle);
// router.get("/trailer/:id", getEntertainmentTrailerById);
// router.get("/photo/:id", getEntertainmentPhotoById);

// //Rene's new code for database connection pool lines 20- 41
// const { Pool } = require('pg');
// require ('dotenv').config(); // this is to load the .env file

// // Create a new pool instance to manage connections to the database in case there are multiple requests at once such as 100 users trying to access the database at the same time this would cause a bottleneck if we only had one connection so this connection pool allows multiple connections to be made and managed efficiently and simultaneously solves the bottleneck issue
// const pool = new Pool({
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   database: process.env.DB_NAME,
// }); 

// // listener for errors on the pool
// pool.on('error', (err) => {
//   console.error('Unexpected error on idle client', err);
//   process.exit(-1);
// });

// module.exports = {
//   query: (text, params) => pool.query(text, params),
// };

// // router.get("/?id");

// // router.post("/",postingUserInformation())

// // postingUserInformation(){

// // call the database
// // await fetch({
// // POST request
// // Username
// // Password    ************

// // --------------------
// // database per the schema

// // })

// // }

// //New routes for user controller functions lines 30-52
// const express = require('express');
// const router = express.Router();
// const userController = require('../controllers/userController');

// // When user visits GET / (relative to this router), call getUsers
// router.get('/', userController.getUsers);


// // When user visits GET /:id, call getUserById
// router.get('/:id', userController.getUserById);

// module.exports = router;

// //Rene's new authentication code lines 76 - 
// const express = require ('express')
// const router = express.router();
// const const = authenticateToken = require ('.../middleare/auth,js') // importing middleware security 



// // Export the router  

// export default router;
