import mongoose from "mongoose";

const RatingSchema=new mongoose.Schema({ 
    rate:{type:Number,required:true},
    count:{type:Number,required:true}
},{_id:false})

const productSchema=new mongoose.Schema({
    id:{type:Number,unique:true}, 
    title:{type:String,required:true},
    price:{type:Number,required:true},
    description:{type:String,required:true},
    category:{type:String,required:true},
    image:{type:String,required:true},
    rating:{type:RatingSchema,required:true}
})

const Products=new mongoose.model("products",productSchema);

export default Products;