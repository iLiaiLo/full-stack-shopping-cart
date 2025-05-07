import mongoose from "mongoose";

const userSchema=new mongoose.Schema(
    {
        email:{
            type: String,
            trim:true,
            required: true,
            unique: true,
        },
        username:{
            type: String,
            trim:true,
            required: true,
            unique: true,
        },
        password:{
            type: String,
            required: true,
        }
    }
)

const User=new mongoose.model("users",userSchema);

export default User;