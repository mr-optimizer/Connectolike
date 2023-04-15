const User = require("../models/user");
const ErrorHandler = require("../utils/errorHandlers");
const catchAsyncErrors = require("./../middleWares/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");
const cloudinary = require("cloudinary").v2;

// Register a user     => /api/v1/register
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
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

  const newUserData = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
    institute: req.body.institute,
    company: req.body.company,
    branch: req.body.branch,
    year: req.body.year,
    semester: req.body.semester,
    instagram: req.body.instagram,
    linkedIn: req.body.linkedIn,
    github: req.body.github,
    facebook: req.body.facebook,
    portfolio: req.body.portfolio,
    uiux: req.body.uiux,
    webDev: req.body.webDev,
    androidDev: req.body.androidDev,
    blockchain: req.body.blockchain,
    ethicalHacking: req.body.ethicalHacking,
    softwareTesting: req.body.softwareTesting,
  };
  if (req.body.avatar) {
    // delete
    const tempUser = await User.findById(req.user.id);
    const image_id = tempUser?.avatar?.public_id;
    if (image_id) await cloudinary.uploader.destroy(image_id);

    // upload
    await cloudinary.uploader.upload(req.body.avatar, {
      public_id: req.user.id + 1,
    });


    // Generate
    const url = cloudinary.url(req.user.id + 1, {
      width: 100,
      height: 100,
      Crop: "fill",
    });

    // The output url
    console.log(url);
    newUserData.avatar = {
      public_id: req.user.id + 1,
      url: url
    };
  }

  const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
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
  const users = await User.find({ ...req.body });
  res.status(200).json({
    success: true,
    users,
  });
});

// Logout user         =>     /api/v1/logout
exports.logout = catchAsyncErrors(async (req, res, next) => {
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
