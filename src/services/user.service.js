const User = require("../models/User.model.js");
const bcrypt = require("bcryptjs");
const { generateAccessToken, generateRefreshToken, verifyRefreshToken } = require("../utils/jwt.js");

const registerUserService = async (fullName, email, password) => {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error("User already exists");
    };

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ fullName, email, password: hashedPassword });

    const userData = user.toObject();
    delete userData.password;
    delete userData.refreshToken;

    return user;
};

const loginUserService = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error("Invalid email or password");
    };

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
        throw new Error("Invalid email or password");
    };

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    user.refreshToken = refreshToken;
    user.lastLogin = new Date();

    await user.save();

    return {
        user, accessToken, refreshToken
    };
};

const logoutUserService=async(refreshToken)=>{
    try{
        const decoded=verifyRefreshToken(refreshToken);

        const user=await User.findById(decoded.userId);
        if(!userId){
            return;
        }

        user.refreshToken=null;
        await user.save();
    }
    catch(error){
        return;
    }
}

module.exports = {
    registerUserService, loginUserService, logoutUserService
}