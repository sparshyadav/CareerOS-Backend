const sanitizeUser = (user) => {
    const userData = user.toObject();

    delete userData.password;
    delete userData.refreshToken;

    return userData;
};

module.exports={sanitizeUser}