const express = require("express");
const router = express.Router();

const {
    registerUser,
    loginUser,
    getUserProfile,
    updateUserProfile,
    getFilteredUsers,
    logout,
} = require("../controllers/authController");

const { isAuthenticatedUser } = require("../middleWares/auth");

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/me").get(isAuthenticatedUser, getUserProfile);
router.route("/filtered-users").get(isAuthenticatedUser, getFilteredUsers);
router.route("/me/update").put(isAuthenticatedUser, updateUserProfile);
router.route("/logout").get(logout);
router.route("/isAuthenticatedUser").get(isAuthenticatedUser, (req, res) => {
    res.status(200).json({
        success: true,
        user: req.user,
    });
});
module.exports = router;
