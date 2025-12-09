import express from "express";
import { getAllMovies, getMoviesByName } from "../controller/moviesController.js";

const router = express.Router();

router.get("/", getAllMovies);
router.get("/:string", getMoviesByName);
// router.get("/?id");


// router.post("/",postingUserInformation())

// postingUserInformation(){

// call the database
// await fetch({
// POST request
// Username 
// Password    ************


// --------------------
// database per the schema 

// })


// }
export default router;
