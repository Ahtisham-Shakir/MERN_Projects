// imports
import express from "express";

// app config
const app = express();
const port = process.env.port || 5000;

// middlewares

// routes
app.get("/", (req, res) => {
  res.status(200).send("Hello world!");
});

// listener
app.listen(port, () => {
  console.log(`server is running ${port}`);
});
