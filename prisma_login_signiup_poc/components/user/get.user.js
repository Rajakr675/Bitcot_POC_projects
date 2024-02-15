module.exports = async(req,res)=>{
  try {
    let user = await prisma.user.findFirst({
        where:{
            id:req.body.id
        }
    })

    if (user) {
      console.log("user------" , user);
      return res.status(200).json({
          success:true,
          message:user
      })
    }else{
      return res.status(400).json({
        success:false,
        message:"invalid user"
    })
    }

  } catch (error) {
    console.log(("error---" , error));
    res.status(500).json(error)
  }
}