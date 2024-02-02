import Subreddit from "../models/subRedditModel";

const createSubReddit = async (req, res) => {
  const { title, description } = req.body;
  try {
    const subreddit = new Subreddit({
      title,
      description,
    });

    await subreddit.save();
    res.status(200).json(subreddit);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export { createSubReddit };
