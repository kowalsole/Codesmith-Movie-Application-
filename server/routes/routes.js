import express from "express";
import { getMoviesByName } from "../controller/moviesController.js";

const router = express.Router();

router.get("/", getMoviesByName);
// router.get("/?id");
export default router;
