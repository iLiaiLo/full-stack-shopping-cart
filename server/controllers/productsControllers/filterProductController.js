import Products from "../../models/productModel.js";

export const productFilterController = async (req, res) => {
  try {
    const { title, category } = req.body;

    const query = { $or: [] };
    if (!title && !category) {
      return res
        .status(400)
        .json({ message: "one of the field should be filled" });
    }

    if (title) {
      query.$or.push({ title: { $regex: title, $options: "i" } });
    }

    if (category) {
      query.$or.push({ category: { $regex: `^${category}$`, $options: "i" } });
    }

    const filteredData = await Products.find(query);
    return res.status(200).json(filteredData);
  } catch (error) {
    return res
      .status(500)
      .json({ message: `error in productFilterController ${error.message}` });
  }
};
