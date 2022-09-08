// imports
import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Pusher from "pusher";
import cors from "cors";
// app config
const app = express();
const port = process.env.port || 5000;

const pusher = new Pusher({
  appId: "1474777",
  key: "7da6ac7a416cb073f100",
  secret: "03cc4d9062795ec5f98b",
  cluster: "ap2",
  useTLS: true,
});

// middlewares
app.use(express.json());
app.use(cors());

// DB config
const connection_url =
  "mongodb+srv://ahtisham:1234@cluster0.uunwxes.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(connection_url, { useNewUrlParser: true }).then(() => {
  console.log("Connection successful");
});

const db = mongoose.connection;
db.once("open", () => {
  console.log("db connection successful");
  const msgCollection = db.collection("messages");
  const changeStream = msgCollection.watch();

  changeStream.on("change", (change) => {
    console.log("Changed => ", change);
    if (change.operationType === "insert") {
      const msgDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        name: msgDetails.name,
        message: msgDetails.message,
        timestamp: msgDetails.timestamp,
        receiver: msgDetails.receiver,
      });
    } else {
      console.log("Error triggering Pusher");
    }
  });
});

// routes
app.get("/", (req, res) => {
  res.status(200).send("Hello world!");
});

// getting All message
app.get("/messages/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// new message
app.post("/messages/new", (req, res) => {
  const newMessage = req.body;
  Messages.create(newMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// listener
app.listen(port, () => {
  console.log(`server is running ${port}`);
});
