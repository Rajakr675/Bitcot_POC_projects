const jwt = require("jsonwebtoken");
const {jwtConfig} = require("../config");

function generate(user) {
    return jwt.sign(user , jwtConfig.secretKey , {
        expiresIn:jwtConfig.expiresIn,
        issuer:jwtConfig.issuer,
        audience:jwtConfig.audience
    })
}

function generateRefreshToken(user) {
    return jwt.sign(user,jwtConfig.secretKey , {
        expiresIn:jwtConfig.expiresIn,
        issuer:jwtConfig.issuer,
        audience:jwtConfig.audience
    })
}

const TokenType = {
 ID_TOKEN: "idToken",
 REFRESH_TOKEN : "refreshToken"
}

module.exports = {generate , generateRefreshToken , TokenType}