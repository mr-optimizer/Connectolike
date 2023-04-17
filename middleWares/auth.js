const ErrorHandler = require('../utils/errorHandlers');
const User = require('../models/user');
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require('jsonwebtoken');

// Check if user is authenticated or not 
exports.isAuthenticatedUser = catchAsyncErrors( async(req,res,next) => {

    const { token } = req.cookies;

    if(!token){
        return next(new ErrorHandler('Login first to access the resource.'));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if(!user){
        return next(new ErrorHandler('User not found with this id.'));
    }
    req.user = user;
    next();
});

