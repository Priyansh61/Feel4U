const mongoose = require("mongoose");

const userTaskListSchema = mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        tasks: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Task'
            }
        ],
        // assignedOn:{
        //     type: Date,
        //     default: Date.now
        // },
        // completedOn: {
        //     type: Date,
        //     default: null
        // },
        isCompleted: {
            type: Boolean,
            default: false
        },
        totalRewardPoints: {
            type: Number,
            default: 0
        },
    },
    { timestamps: true }
);

const UserTaskList = mongoose.model("UserTaskList", userTaskListSchema);
module.exports = UserTaskList;
