const User = require("../models/user");
const ErrorHandler = require("../utils/errorHandlers");
const catchAsyncErrors = require("./../middleWares/catchAsyncErrors");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const APIFeatures = require("../utils/apiFeatures");

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
    // console.log(user);
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

// Update User Profile     =>  /api/v1/me/update
exports.updateUserProfile = catchAsyncErrors(async (req, res, next) => {
  if (!req.body.id) {
    return next(new ErrorHandler("Please enter a valid id", 500));
  }
  const user = await User.findByIdAndUpdate(req.user.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: true,
  });

  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }
  res.status(200).json({
    success: true,
    message: "Profile Updated Successfully",
    user,
  });
});

// Get Filtered Users     =>  /api/v1/filtered-users
exports.getFilteredUsers = catchAsyncErrors(async (req, res, next) => {
  // const filteredUsers = new APIFeatures(User.find(), req.query).filter();
  console.log(req.body);
  res.status(200).json({
    success: true,
    users,
  });
});

// Logout user         =>     /api/v1/logout
exports.logout = catchAsyncErrors(async (req, res, next) => {
  // res.cookie("token", null, {
  //   expires: new Date(Date.now()),
  //   httpOnly: true,
  // });
  // res.status(200).json({
    //   success: true,
    //   message: "Logged out",
    // });
    const options = {
      expires: new Date(Date.now()),
      httpOnly: true,
    };
    console.log("Logged out");

  res.status(200).cookie("token", null, options).json({
    success: true,
    message: "Logged out !!",
  });
});
