const mongoose = require("mongoose");

const communityMessageSchema = mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        message: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const CommunityMessage = mongoose.model("CommunityMessage", communityMessageSchema);
module.exports = CommunityMessage;
