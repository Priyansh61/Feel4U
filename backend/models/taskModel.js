const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    title : {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    estimatedCompletionTime: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: "Pending"
    },
    rewardPoints: {
      type: Number,
      required: true,
    },
    imageURL: {
      type: String,
      required: false,
    }
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
