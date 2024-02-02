import Post from "../models/postModel";

const allPost = async (req, res) => {
  try {
    const allPosts = await Post.find();
    res.json(allPosts);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// const allPostOfUser = async (req, res) => {
//   try {
//     const posts = await Post.find({ author: req.user._id });
//     if (!posts || posts.length === 0) {
//       return res.status(404).send("No posts found for this user");
//     }
//     res.json(posts);
//   } catch (error) {
//     console.error("probleme d'id:", error);
//     res.status(500).send(error.message);
//   }
// };

const newPost = async (req, res) => {
  try {
    const { author, title, description, imageUrl } = req.body;
    const newPost = new Post({
      author: req.user._id,
      title,
      description,
      imageUrl,
    });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const post = await Post.findOne({ _id: postId, author: req.user._id });
    if (!post) {
      return res
        .status(404)
        .json({ message: "Post not found or unauthorized" });
    }
    post.title = req.body.title;
    post.description = req.body.description;
    post.imageUrl = req.body.imageUrl;

    await post.save();

    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const post = await Post.findOne({ _id: postId, author: req.user._id });
    if (!post) {
      return res
        .status(404)
        .json({ message: "Post not found or unauthorized" });
    }
    await Post.deleteOne({ _id: postId });
    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  allPost,
  // allPostOfUser,
  newPost,
  updatePost,
  deletePost,
};
