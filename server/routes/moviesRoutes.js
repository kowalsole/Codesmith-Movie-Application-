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

// 1. Specific Routes first
router.get("/", getAllEntertainment);
router.get("/info/:id", getEntertainmentById);
router.get("/streaming/:name", getWhereStreamingByTitle);
router.get("/trailer/:id", getEntertainmentTrailerById);
router.get("/photo/:id", getEntertainmentPhotoById);

// 2. Generic Catch-all Routes last
// This ensures "info" or "trailer" isn't mistaken for a generic "name"
router.get("/:name", getEntertainmentsByName);

export default router;