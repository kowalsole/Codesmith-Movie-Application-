// Router: defines all movie-related HTTP routes for the application

import express from 'express';

// Controller functions that handle fetching movie data from the external IMDb API
import {
  getAllEntertainment,
  getEntertainmentById,
  getEntertainmentPhotoById,
  getEntertainmentsByName,
  getEntertainmentTrailerById,
  getWhereStreamingByTitle,
} from '../controller/moviesController.js';

const router = express.Router();

// Maps incoming movie-related requests to the appropriate controller logic
router.get('/', getAllEntertainment);
router.get('/:name', getEntertainmentsByName);
router.get('/info/:id', getEntertainmentById);
router.get('/streaming/:name', getWhereStreamingByTitle);
router.get('/trailer/:id', getEntertainmentTrailerById);
router.get('/photo/:id', getEntertainmentPhotoById);

export default router;
