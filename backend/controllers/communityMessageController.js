const asyncHandler = require("express-async-handler");
const CommunityMessage = require("../models/communityModel");

const uploadCommunityMessage = asyncHandler(async (req, res) => {
    const { message, userId } = req.body;

    // Basic validation to ensure required fields are provided
    if (!message || !userId) {
        res.status(400);
        throw new Error("Please add all fields");
    }

    // Create a new community message document
    const communityMessage = new CommunityMessage({
        message,
        userId,
    });

    const createdCommunityMessage = await communityMessage.save();

    res.status(201).json(createdCommunityMessage);
});

const fetchAllCommunityMessages = asyncHandler(async (req, res) => {
    const communityMessages = await CommunityMessage.find({}).populate("userId");
    res.json(communityMessages);
});

module.exports = { uploadCommunityMessage, fetchAllCommunityMessages };