import Comment from "../models/comModel";
import Post from "../models/postModel";

const createCom = async (req, res) => {
  try {
    const { postId } = req.params;
    console.log("Searching for post with ID:", postId);
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).send("Post not found");
    }

    if (!req.user || !req.user._id) {
      return res.status(401).send("User not authenticated");
    }

    const comment = new Comment({
      post: postId,
      author: req.user._id,
      description: req.body.description,
    });
    // if (!post.com.includes(com._id)) {
    await comment.save();
    post.comments.push(comment._id);
    await post.save();
    // } else {
    //   res
    //     .status(400)
    //     .json({ message: "Le commentaire est déjà dans le post." });
    // }

    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createCom };
