import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  category: { type: String, required: true,}
});

const CategoryModel = mongoose.model('category', categorySchema);

export default CategoryModel;
