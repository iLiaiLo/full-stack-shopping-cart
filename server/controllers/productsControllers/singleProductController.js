import Products from "../../models/productModel.js";

export const singleProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Products.findById(id);
    if (!product) {
      return res
        .status(404)
        .json({ message: `Product with id: ${id} not found` });
    }

    return res.status(200).json(product);
  } catch (error) {
    return res
      .status(500)
      .json({ message: `error in singleProductController: ${error.message}` });
  }
};
