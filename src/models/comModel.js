import mongoose, { Schema } from "mongoose";

const comSchema = new Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
  description: String,
});

const Comment = mongoose.model("Comment", comSchema);

export default Comment;
