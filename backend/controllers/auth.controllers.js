import User from "../models/users.models.js";
import bcrypt from "bcryptjs";
import generateTokenSetCookie from "../utils/generateJWT.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (password != confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res
        .status(400)
        .json({ error: "Username already exists: " + username });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const profilePic = `https://ui-avatars.com/api/?name=${fullName}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic,
    });
    if (newUser) {
      generateTokenSetCookie(newUser._id, res);
      await newUser.save();
      console.log("new user object made.",newUser);

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Error in user creation" });
    }
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
    console.log("Error in auth controller ", error.message);
  }
  console.log("signup user");
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const pass = await bcrypt.compare(password, user?.password || "");
    if (!user || !pass) {
      console.log("Invalid credentials");
      return res.status(400).json({ error: "Invalid user credentials." });
    }
    generateTokenSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      gender: user.gender,
      profilePic: user.profilePic
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
    console.log("Error in login controller ", error.message);
  }
  console.log("Login user");
};

export const logout = async (req, res) => {
  try {
    res.cookie("jwt","",{maxAge:0});
    res.status(200).json({message: "Logged out."});
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
    console.log("Error in logout controller ", error.message);
  }
  console.log("Logout user");
};
