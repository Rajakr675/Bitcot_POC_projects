const { generateSignInToken } = require("../../middleware/passport");
const bcrypt = require("bcrypt");
const {bcryptConfig} = require("../../config")
module.exports = async (req, res) => {
    try {
        let body = req.body
        console.log(body);
        let user = await prisma.user.findUnique({
            where: {
                email: body.email 
            }
        });

        if (user) {
            console.log("This Email has already been taken");
            return res.status(422).json({
                success: false,
                message: "This Email has already been taken",

            })
        }

        if(body.password){
            body.password = bcrypt.hashSync(body.password ,bcryptConfig.hasRound)
        }

        let createUser = await prisma.user.create({
            data: body
        });

        let data = generateSignInToken(createUser);
        return res.json({ ...data })

    } catch (error) {
        console.log("error---------", error);
        return res.status(500).json(error)

    }
}
