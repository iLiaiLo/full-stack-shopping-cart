import UserProducts from "../../models/userProductsModel.js";

export const removeUserProduct = async (req, res) => {
    try {
        const userId = req.user.id;
        const { productId } = req.params; 

        const userProduct = await UserProducts.findOneAndDelete({ userId, productId });
        
        if (!userProduct) {
            return res.status(404).json({ message: "Product not found in user list" });
        }

        return res.status(200).json({ message: "Product removed from user list", userProduct });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error in removeUserProduct controller" });
    }
}