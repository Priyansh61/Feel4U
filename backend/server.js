/**
 * This file represents the server-side code for the backend of the application.
 * It sets up an Express server, establishes database connection, defines routes,
 * handles error middleware, and sets up socket.io for real-time communication.
 */

const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const path = require("path");
const cors = require("cors");

dotenv.config();
connectDB();
const app = express();

app.use(express.json()); // to accept json data
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

// --------------------------deployment------------------------------

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

// --------------------------deployment------------------------------

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT;

const server = app.listen(
  PORT,
  console.log(`Server running on PORT ${PORT}...`.yellow.bold)
);
// use cors to allow pre flight check



const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3000",
  },
});

/**
 * Event listener for socket.io connection.
 * Handles various socket events like setup, join chat, typing, stop typing, and new message.
 *
 * @param {object} socket - The socket object representing the client connection.
 */
io.on("connection", (socket) => {
  console.log("Connected to socket.io");

  /**
   * Event listener for 'setup' event.
   * Joins the socket to a specific room based on user data and emits 'connected' event.
   *
   * @param {object} userData - The user data object.
   */
  socket.on("setup", (userData) => {
    socket.join(userData._id);
    socket.emit("connected");
  });

  /**
   * Event listener for 'join chat' event.
   * Joins the socket to a specific chat room.
   *
   * @param {string} room - The chat room identifier.
   */
  socket.on("join chat", (room) => {
    socket.join(room);
    console.log("User Joined Room: " + room);
  });

  /**
   * Event listener for 'typing' event.
   * Emits 'typing' event to all sockets in the same room.
   *
   * @param {string} room - The chat room identifier.
   */
  socket.on("typing", (room) => socket.in(room).emit("typing"));

  /**
   * Event listener for 'stop typing' event.
   * Emits 'stop typing' event to all sockets in the same room.
   *
   * @param {string} room - The chat room identifier.
   */
  socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

  /**
   * Event listener for 'new message' event.
   * Sends the new message to all users in the chat room except the sender.
   *
   * @param {object} newMessageRecieved - The new message object.
   */
  socket.on("new message", (newMessageRecieved) => {
    var chat = newMessageRecieved.chat;

    if (!chat.users) return console.log("chat.users not defined");

    chat.users.forEach((user) => {
      if (user._id == newMessageRecieved.sender._id) return;

      socket.in(user._id).emit("message recieved", newMessageRecieved);
    });
  });

  /**
   * Event listener for 'setup' event.
   * Handles user disconnection and leaves the socket from the user's room.
   */
  socket.off("setup", () => {
    console.log("USER DISCONNECTED");
    socket.leave(userData._id);
  });
});
