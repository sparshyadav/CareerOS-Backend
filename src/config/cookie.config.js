const accessTokenCookieOptions = {
    httpOnly: true,
    maxAge: 15 * 60 * 1000
};

const refreshTokenCookieOptions = {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000
};

module.exports = {
    accessTokenCookieOptions, refreshTokenCookieOptions
}