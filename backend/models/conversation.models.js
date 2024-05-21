import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
    messages: [
        {
            type: mongoose.Schema.ObjectId,
            ref:'Message',
            default: []
        }
    ],
  },
  { timestamps: true }
);

const conversation = mongoose.model("Conversation",conversationSchema);

export default conversation;