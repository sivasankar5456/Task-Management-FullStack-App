import TaskModel from '../models/TaskModel.js'

const CreateTask = async (request, response) => {
  const token = request.headers.authorization?.split(" ")[1];
  if (!token) {
    return response.status(401).json({ message: "Access denied" });
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  try {
    // const taskModel = await TaskModel.findByIdAndUpdate(request.body,{ new: true });
    const taskModel = new TaskModel(request.body,{ new: true });
    await taskModel.save();

    response.status(201).json({
      success: true,
      message: "task created succesfully",
      taskModel,
    });
  } catch (error) {
    console.log(error);
    response.status(500).json({
      success: false,
      message: "employee not created due to internal server error",
    });
  }
};
export { CreateTask };
