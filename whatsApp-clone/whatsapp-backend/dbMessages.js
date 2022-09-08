import mongoose from "mongoose";

const whatsappSchema = mongoose.Schema({
  message: String,
  name: String,
  timestamp: String,
  receiver: false,
});

export default mongoose.model("messages", whatsappSchema);
