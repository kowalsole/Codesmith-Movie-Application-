import mongoose from 'mongoose';

// Defines the schema for movies or shows a user saves from the external IMDb API
const watchlistSchema = new mongoose.Schema({
  imdbId: { type: String, required: true },
  title: { type: String, required: true },
  poster: { type: String, required: true },
  year: { type: String, required: true },
  iswatched: { type: Boolean, default: false },
});

// Creates and exports the Watchlist model for interacting with the watchlist collection
const Watchlist = mongoose.model('Watchlist', watchlistSchema);

export default Watchlist;
