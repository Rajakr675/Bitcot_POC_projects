import { prisma } from "../DB/db.config.js"
import {GenrateToken} from "../jwt_auth/jwt.js"



//* CreateUser 

export const createUser= async (req,res)=>{
    const {firstName,email,password}=req.body

    const findUser= await prisma.user.findUnique({
        where:{
            email:email
        }
    })
    if(findUser){
        return res.json({status:400 , msg:"Email Already Taken . Please use another email."})
    }
    const newUser =await prisma.user.create({
        data:{
            firstName:firstName,
            email:email,
            password:password
        }
    })
    return res.json({status:200 , data:newUser , msg:"User created successfully"})
}


//* FetchUser.

export const fechdata=async (req, res)=>{
    const info=await prisma.user.findMany({})
    return res.json({status:200,data:info})
}

//* UpdateUser.

export const UpdateUser= async(req,res)=>{
    const userId=req.params.id
    const {firstName , email , password}=req.body
    console.log(">>>>>",req.body);
    await prisma.user.update({
        where:{
            id:Number(userId)
        },
        data:{
            firstName:firstName,
            email:email,
            password:password
        }
    })
    return res.json({status:200, msg:"update successfully"})

}

//* DeleteUser.

export const deleteUser=async (req,res)=>{
    const userId=req.params.id;
    await prisma.user.delete({
        where:{
            id:Number(userId)
        }
    })
    return res.json({msg:"user deleted successfully"})
}

//* LoginUser

export const LoginUser = async (req, res) => {
    const { email,password } = req.body;
    console.log(">>>>>>>>>>>>>>>>>>>",req.body);
    try {
        const info = await prisma.user.findUnique({ where: {email} });
        if(!info){
            return res.send({msg:'email or password is wrong'})
        }
        
        if(info.password != password){
            return res.send({message:'email or password is wrong'})
        }
        if (info) {
            let token = GenrateToken(req.body);
            res.cookie('Token', token);
            console.log("Logged in successfully....");
            res.send('Logged in successfully');
        } else {
            res.json({ message: 'id or Name is wrong' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};