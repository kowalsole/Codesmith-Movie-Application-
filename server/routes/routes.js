import express from "express";
import {
  getAllEntertainment,
  getEntertainmentById,
  getEntertainmentPhotoById,
  getEntertainmentsByName,
  getEntertainmentTrailerById,
  getWhereStreamingByTitle,
} from "../controller/moviesController.js";

const router = express.Router();

router.get("/", getAllEntertainment);
router.get("/:name", getEntertainmentsByName);
router.get("/info/:id", getEntertainmentById);
router.get("/streaming/:name", getWhereStreamingByTitle);
router.get("/trailer/:id", getEntertainmentTrailerById);
router.get("/photo/:id", getEntertainmentPhotoById);

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
