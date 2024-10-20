import CategoryModel from "../models/CategoryModel.js";

const CreateCategory = async (request, response) => {
    console.log('category')
  const { category } = request.body;
  try {
    // Check if category already exists
    const Category = await CategoryModel.findOne({ category });
    if (Category){
      return response.status(400).json({ message: "category already exists" });
    }
  
    const newCategory = new CategoryModel({
        category:category
    });
    await newCategory.save();

    response.status(201).json({ message: "category crearted successfully", newCategory });
  } catch (error) {
    response.status(500).json({ message: "Server error" });
  }
};
export { CreateCategory };
