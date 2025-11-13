import { signupSchema, signinSchema } from "../validations/userVallidation.js";
import User from "../models/UserModel.js";
import bcrypt from "bcryptjs";
import { generateAccessToken } from "../utils/tokenUtils.js";
export async function signupUser(req, res) {

    const parsed = signupSchema.safeParse(req.body);

    if (!parsed.success) {
      const errors = parsed.error.issues.map((err) => ({
        field: err.path[0],
        message: err.message,
      }));

      return res.status(400).json({
        success: false,
        errors,
      });
    }

    const { name, email, password } = parsed.data;

    const user = await User.findOne({ email });

    
    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = generateAccessToken(newUser._id);
    // Set cookie
    res.cookie("accessToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // only send over HTTPS
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });

}

export async function signinUser(req, res) {

    const parsed = signinSchema.safeParse(req.body);

    if (!parsed.success) {
      const errors = parsed.error.issues.map((err) => ({
        field: err.path[0],
        message: err.message,
      }));

      return res.status(400).json({
        success: false,
        errors,
      });
    }
    const { email, password } = parsed.data;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }
    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }
    const token = generateAccessToken(user._id);
    res.cookie("accessToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    })
    res.status(200).json({
      success: true,
      message: "Signin successfully",
      user: {
        name: user.name,
        email: user.email,
      },
    });
    
}


export async function logoutUser(req, res) {
    res.clearCookie("accessToken",  {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
    })
    res.status(200).json({
        success: true,
        message: "Logout successfully",
    });
}