import { generateToken } from "../middlewares/AuthToken";
import User from "../models/userModel";

export const inscription = async (req, res) => {
  try {
    const newUser = await new User();
    newUser.name = req.body.name;
    newUser.email = req.body.email;
    await newUser.crypto(req.body.password);
    const savedUser = await newUser.save();
    const token = generateToken(savedUser);
    res.json({ newUser: savedUser, token });
  } catch (error) {
    console.log(error.message);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }).select("+password");
    const verify = await user.verifPass(password, user.password);
    if (!verify) {
      const error = new Error("Invalid Password");
      throw error;
    }
    const token = generateToken(user);
    res.json({ message: "Vous êtes connecté", token });
  } catch (error) {
    console.error(error);
  }
};
