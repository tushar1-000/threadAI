import jwt  from "jsonwebtoken";
import User from "../models/UserModel.js";

const protect = async function (req, res, next) {
  try {
    const token = req.cookies.accessToken;

    
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    req.user = await User.findById(decoded.id).select("-password");
    next();
  } catch (err) {
    console.log(err)
    return res.status(403).json({ message: "Token invalid or expired" });
  }
};
export default protect;