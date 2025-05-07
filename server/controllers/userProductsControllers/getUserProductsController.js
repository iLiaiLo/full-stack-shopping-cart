import UserProducts from "../../models/userProductsModel.js";
import Products from "../../models/productModel.js";

export const getUserProducts = async (req, res) => {
    try {
        const userId = req.user.id;
        const userProducts = await UserProducts.find({ userId });

        const productIds = userProducts.map(userProduct => userProduct.productId);

        const products = await Products.find({ _id: { $in: productIds } });
        
        return res.status(200).json(products);
        
    } catch (error) {
        return res.status(500).json({ message: "Internal server error in getUserProducts controller" });
    }
}