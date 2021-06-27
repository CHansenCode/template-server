import mongoose from "mongoose";

const chatSchema = mongoose.Schema({
  name: String,
  users: [
    {
      username: String,
      _id: String,
    },
  ],
  lastUpdated: String,
  messages: [
    {
      message: String,
      user: String,
      createdAt: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
});

const Chats = mongoose.model("chats", chatSchema, "chats");

export default Chats;
