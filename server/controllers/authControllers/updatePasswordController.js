import User from "../../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const updatePasswordController=async (req,res)=>{
    try {
        
        const {email,newPassword}=req.body;
    
        if(!email || !newPassword){
            return res.status(400).json({message:"please fill all the fields"});
        }
    
        const user=await User.findOne({email});
        
        if(!user){
            return res.status(400).json({message:"user not found"});
        }

        if(newPassword.length<6){
            return res.status(400).json({message:"password should contain at least 6 character"});
        }
    
        const hashPassword=await bcrypt.hash(newPassword,10);

        await User.findOneAndUpdate({email},{password:hashPassword},{new:true});

        const token=jwt.sign({user},process.env.JWT_SECRET_KEY,{expiresIn:'1d'});

        return res.status(200).json({token});
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}