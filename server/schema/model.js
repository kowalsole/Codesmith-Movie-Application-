import mongoose from "mongoose";


//password: hspX6K3q9KeAF5P8

//MongoURL string = mongodb+srv://scratch-ghost-orchid:hspX6K3q9KeAF5P8@movie-application.hzdjoui.mongodb.net/?appName=Movie-application

//we are going to store things user saved from the external api
const watchlistSchema = new mongoose.Schema({
  imdbId: { type: String, required: true },
  title: { type: String, required: true },
  poster: { type: String, required: true },
  year: { type: String, required: true },
  iswatched: { type: Boolean, default: false },
});


const Watchlist = mongoose.model("Watchlist", watchlistSchema);

export default Watchlist;
