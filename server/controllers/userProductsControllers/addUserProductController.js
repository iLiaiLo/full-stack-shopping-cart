import UserProducts from "../../models/userProductsModel.js";


export const addUserProduct = async (req, res) => {

    try {
        const userId = req.user.id;
        const { productId } = req.body; 


        const existingProduct = await UserProducts.findOne({ userId, productId });
        if (existingProduct) {
            return res.status(400).json({ message: "Product already exists in user list" });
        }

        
        const newUserProduct = new UserProducts({ userId, productId });
        await newUserProduct.save();

        return res.status(201).json({ message: "Product added to user list", newUserProduct });
        
    } catch (error) {
        return res.status(500).json({ message: "Internal server error in addUserProduct controller" });
    }
    
}