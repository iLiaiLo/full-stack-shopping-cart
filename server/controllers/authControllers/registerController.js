import User from "../../models/userModel.js";
import bctypt from "bcrypt";

export const registerController=async (req,res)=>{
    try {

        const {username,email,password}=req.body;

        const emailRegex=/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
        const usernameRegex= /(?=.+[A-Za-z]).{3,}$/;

        if(!username || !email || !password){
            return res.status(400).json({message:"Please fill all the fields"});
        }

        const userAlreadyExists=await User.findOne({email});

        if(userAlreadyExists){
            return res.status(400).json({message:"user with this email already exists"});
        }

        if(!emailRegex.test(email)){
            return res.status(400).json({message:"invalid email. correct email format something@example.com"});
        }
        if(!usernameRegex.test(username)){
            return res.status(400).json({message:`invalid username.
                username must contain at least 3 characters,
                including uppercase and lowercase letters and numbers`
            })
        };
        if(password.length<6){
            return res.status(400).json({message:"password should contain at least 6 character"});
        };

        const hashedPassword=await bctypt.hash(password,10);
        
        const newUser=new User({
            email,
            username,
            password:hashedPassword
        });

        await newUser.save();

        return res.status(201).json({message:"user created sucessfully"});
        
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}