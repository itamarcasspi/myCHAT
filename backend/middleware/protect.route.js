import jwt from "jsonwebtoken";
import User from "../models/users.models.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if(!token)
    {
        return res.status(401).json({error: "Unauthorized action- proper token was not provided"});
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if(!decoded)
    {
        return res.status(401).json({error: "Unauthorized action- invalid token"});
    }
    const user = await User.findById(decoded.userId).select("-password");
    if(!user)
    {
        return res.status(404).json({error: "User not found "+req.user_id});

    }

    req.user = user;
    next();

  } catch (error) {
    console.log("Error: ", error.message);
    res.status(500).json({ error: "protect route server error" });
  }
};

export default protectRoute;