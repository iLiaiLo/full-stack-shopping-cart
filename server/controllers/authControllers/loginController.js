import User from "../../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const loginController= async (req,res)=>{
    try {
        const {username,password}=req.body;

        if(!username || !password){
            return res.status(400).json({message:"please fill all the filed"});
        }

        const user=await User.findOne({username});
        if(!user){
            return res.status(404).json({message:`user with username: ${username} not found`});
        }

        const passowrdIsCorrect=await bcrypt.compare(password,user.password);
        if(!passowrdIsCorrect){
            return res.status(404).json({message:"incorrect password."});
        }

        const token= jwt.sign({id:user._id},process.env.JWT_SECRET_KEY,{expiresIn:'1d'});

        return res
        .cookie("token",token,{httpOnly:true,secure:true,maxAge:24*60*60*1000})
        .status(200)
        .json({token});

    }
    catch (error) {
        return res.status(500).json({message:"Internal server error"})
    }
}