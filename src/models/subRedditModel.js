import mongoose, { Schema } from "mongoose";

const subRedditSchema = new Schema({
  title: String,
  description: String,
  post: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
});

const Subreddit = mongoose.model("Subreddit", subRedditSchema);

export default Subreddit;
