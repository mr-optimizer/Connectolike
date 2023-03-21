const User = require("../models/user");
const ErrorHandler = require("../utils/errorHandlers");
const catchAsyncErrors = require("./../middleWares/catchAsyncErrors");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");

// Register a user     => /api/v1/register
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  // if(req.body.avatar === undefined){
  //     if(images === undefined){
  //       return next(new ErrorHandler("Please upload a profile picture", 500));
  //     }
  //   }
  //   const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
  //     folder: "users",
  //     width: 150,
  //     crop: "scale",
  //   });
  const user = await User.create({
    ...req.body,
  });
  sendToken(user, 200, res);
});

// Login user     => /api/v1/login
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  // check if email and password are entered or not
  if (!email || !password) {
    return next(new ErrorHandler("Please enter a email and password", 400));
  }

  // Finding user in database
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }

  // check password is correct or not
  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }
  sendToken(user, 200, res);
});

// Get currently logged in user details     =>  /api/v1/me
exports.getUserProfile = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  res.status(200).json({
    success: true,
    user,
  });
});
