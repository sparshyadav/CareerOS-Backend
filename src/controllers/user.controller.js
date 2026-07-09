const { registerUserService, loginUserService, logoutUserService } = require("../services/user.service.js");
const { accessTokenCookieOptions, refreshTokenCookieOptions } = require("../config/cookie.config.js");

const registerUserController = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;
        if (!fullName || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const data = await registerUserService(fullName, email, password);

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            data
        });
    }
    catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const loginUserController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        };

        const { user, accessToken, refreshToken } = await loginUserService(email, password);

        res.cookie("accessToken", accessToken, accessTokenCookieOptions);
        res.cookie("refreshToken", refreshToken, refreshTokenCookieOptions);

        const userData = user.toObject();
        delete userData.password;
        delete userData.refreshToken;

        return res.status(200).json({
            success: true,
            message: "User loggedin successfully",
            data: userData
        });
    }
    catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

const logoutUserController = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;

        if (!refreshToken) {
            return rs.status(200).json({
                success: true,
                message: "Already logged out"
            });
        }

        await logoutUserService(refreshToken);

        res.clearCookie("accessToken", accessTokenCookieOptions);
        res.clearCookie("refreshToken", refreshTokenCookieOptions);

        return res.status(200).json({
            success: true,
            message: "Logout Successful"
        });
    }
    catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = { registerUserController, loginUserController, logoutUserController };