// const jwt = require("jsonwebtoken");
import jwt from "jsonwebtoken"
import { prisma } from "../DB/db.config.js"


export const GenrateToken = (id) => {
    return jwt.sign(id, "kldjfkjfkd8745hdxzxz");
};

export const verfyToken = async (req, res, next) => {
    if (req.headers.cookie) {
        const Token = req.headers.cookie.split('=')[1];
        try {
            const userId = jwt.verify(Token, 'kldjfkjfkd8745hdxzxz');
            const UserData = await prisma.user.findUnique({ where: { id: userId } });
            req.UserData = UserData;
            next();
        } catch (error) {
            console.log(error);
            res.status(401).json({ mesg: 'Invalid Token' });
        }
    } else {
        res.status(401).json({ mesg: 'Login First' });
    }
};

// module.exports = { GenrateToken, verfyToken };