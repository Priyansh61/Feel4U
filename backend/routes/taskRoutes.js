const express = require('express');
const router = express.Router();


const {
  completeTask,
  updateCompletionStatus,
  assignTask,
  getCompletedTasks,
  getUserTotalRewardPoints,
  uploadTask,
  fetchLimitedTask,
  fetchAllTasks,
} = require('../controllers/taskController');

// Task Routes
router.post('/task', uploadTask); // Upload a new task
router.get('/tasks', fetchAllTasks); // Fetch all tasks
router.get('/tasks/limited', fetchLimitedTask); // Fetch a specific number of tasks

// UserTaskList Routes
router.post('/user/tasks/assign', assignTask); // Assign a single task to a user
router.post('/user/tasks/complete', completeTask); // Mark a task as completed
router.get('/user/tasks/completed', getCompletedTasks); // Get all completed tasks for a user
router.get('/user/rewardpoints', getUserTotalRewardPoints); // Get total reward points for a user
router.post('/user/tasks/checkCompletion', updateCompletionStatus); // Check and update completion status for all tasks

module.exports = router;
