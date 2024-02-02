import mongoose, { Schema } from "mongoose";

const postSchema = new Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: { type: String },
  description: String,
  imageUrl: String,
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

const Post = mongoose.model("Post", postSchema);

export default Post;
