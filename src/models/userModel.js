import { mongoose, Schema } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: { type: String, min: [6, "Must be at least 6 characters"] },
});

userSchema.methods.crypto = async function (password) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(password, salt);
};

userSchema.methods.verifPass = async function (password, elderpassword) {
  const result = await bcrypt.compare(password, elderpassword);
  return result;
};

const User = mongoose.model("User", userSchema);

export default User;
