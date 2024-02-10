const asyncHandler = require("express-async-handler");
const UserTaskList = require("../models/userTaskListModel");
const Task = require("../models/taskModel");

// Upload Task
const uploadTask = asyncHandler(async (req, res) => {
    const { description, estimatedCompletionTime, rewardPoints } = req.body;

    // Basic validation to ensure required fields are provided
    if (!description || !estimatedCompletionTime || !rewardPoints) {
        res.status(400);
        throw new Error("Please add all fields");
    }

    // Create a new task document
    const task = new Task({
        description,
        estimatedCompletionTime,
        rewardPoints,
        status: "Pending", // Default status
    });

    const createdTask = await task.save();

    res.status(201).json(createdTask);
});

//   Fetch all tasks
const fetchAllTasks = asyncHandler(async (req, res) => {
    const tasks = await Task.find({});
    res.json(tasks);
});

// Fetch Limited Task
const fetchLimitedTask = asyncHandler(async (req, res) => {
    const { limit } = req.query; // Assume the number of tasks to fetch is passed as a query parameter

    const tasks = await Task.find({}).limit(Number(limit));
    res.json(tasks);
});

// Assign a new task to a user
const assignTask = asyncHandler(async (req, res) => {
    const { userId, taskId } = req.body;

    const task = await Task.findById(taskId);
    if (!task) {
        res.status(404);
        throw new Error("Task not found");
    }

    const userTaskList = await UserTaskList.findOneAndUpdate(
        { userId },
        { $push: { tasks: taskId } },
        { new: true, upsert: true }
    );

    res.status(201).json(userTaskList);
});

// Mark a task as completed and assign reward points to the user's task list
const completeSingleTask = asyncHandler(async (req, res) => {
    const { listId, taskId } = req.body;
    if (!taskList) {
        res.status(404);
        throw new Error("Task list not found");
    }
    const task = await Task.findById(taskId);

    if (!task) {
        res.status(404);
        throw new Error("Task not found");
    }

    // Update the task status in UserTaskList
    await UserTaskList.findOneAndUpdate(
        { _id: listId },
        {
            $set: { "tasks.$.status": "Completed", "tasks.$.completedOn": new Date() },
            $inc: { totalRewardPoints: task.rewardPoints }
        }
    );

    const taskList = await UserTaskList.find({ _id: listId });
    // Check if all tasks are completed
    const allTasksCompleted = userTaskList.tasks.every(task => task.status === 'Completed');
    if (allTasksCompleted) {
        // If all tasks are completed, update the isCompleted flag to true
        taskList.isCompleted = true;
        await userTaskList.save(); // Save the updated document
        res.json({ message: "All tasks completed, status updated", isCompleted: true });
    } else {
        // If not all tasks are completed, optionally return a message or update status accordingly
        res.json({ message: "Not all tasks are completed yet", isCompleted: false });
    }
});

// Get all completed tasks for a user
const getCompletedTasks = asyncHandler(async (req, res) => {
    const { userId } = req.params;

    // Assuming tasks is an array of ObjectId references to Task documents
    const userTaskList = await UserTaskList.findOne({ userId })
        .populate('tasks'); // Populate the tasks array directly

    if (!userTaskList) {
        res.status(404).json({ message: "User task list not found" });
        return;
    }

    // Assuming the populated tasks are now fully accessible,
    // filter for completed tasks
    const completedTasks = userTaskList.tasks.filter(task => task.status === "Completed");

    res.json(completedTasks);
});


// Get total reward points for a user
const getUserTotalRewardPoints = asyncHandler(async (req, res) => {
    const { userId } = req.params;
    const userTaskLists = await UserTaskList.find({ userId });

    if (!userTaskLists) {
        res.status(404);
        throw new Error("User task list not found");
    }
    // Calculate all the reward points for the user
    let totalPoints = 0;
    userTaskLists.forEach((taskList) => (totalPoints += taskList.totalRewardPoints))
    res.json(totalPoints);
});

const updateCompletionStatus = asyncHandler(async (req, res) => {
    const { userId } = req.params; // Assuming userId is passed as a URL parameter

    // Find the user's task list and populate the tasks to access their completion status
    const userTaskList = await UserTaskList.findOne({ userId }).populate('tasks');

    if (!userTaskList) {
        res.status(404).json({ message: "User task list not found" });
        return;
    }

    // Check if all tasks are completed
    const allTasksCompleted = userTaskList.tasks.every(task => task.status === 'Completed');

    if (allTasksCompleted) {
        // If all tasks are completed, update the isCompleted flag to true
        userTaskList.isCompleted = true;
        await userTaskList.save(); // Save the updated document
        res.json({ message: "All tasks completed, status updated", isCompleted: true });
    } else {
        // If not all tasks are completed, optionally return a message or update status accordingly
        res.json({ message: "Not all tasks are completed yet", isCompleted: false });
    }
});

module.exports = {
    uploadTask,
    fetchAllTasks,
    fetchLimitedTask,
    assignTask,
    completeSingleTask,
    getCompletedTasks,
    getUserTotalRewardPoints,
    updateCompletionStatus
};