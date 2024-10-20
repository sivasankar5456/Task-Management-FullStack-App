import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    userId:{
        type: String,
        required: true,
      },
      userEmail:{
        type: String,
        required: true,
      },
    taskData:[
        {
            taskid: {
                type: String,
                required: true,
              },
              taskTitle: {
                type: String,
                required: true,
              },
              status: {
                type: String,
                required: true,
              },
              dueDate: String,
              category: {
                type: String,
                required: true,
              }
        }
    ],

  },
  { timestamps: true }
);

const TaskModel = mongoose.model("task", TaskSchema);

export default TaskModel;
