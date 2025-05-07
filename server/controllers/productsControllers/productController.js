import Products from "../../models/productModel.js";

export const productController=async (req,res)=>{
    try {
        const Data=await Products.find();
        return res.status(200).json(Data);
    } catch (error) {
        return res.status(500).json({err:error})
    }
}