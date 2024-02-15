const passport = require("passport")
module.exports = async(req,res)=>{
    try {
      passport.authenticate('local' , async(err , data, info) =>{
        if(err){
            console.log("login error" , err.message);
                return res.status(400).json({
                    success:false,
                    message:err.message
                })
        }
        
        console.log("user data================",data );
        return res.json(data)
      })(req,res)  
    } catch (error) {
       console.log(error); 
       return res.status(500).json({
        success:false,
        message:error
       })
    }
}