const express = require("express");
const {randomBytes} = require("crypto");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const posts = {};

app.use(bodyParser.json());
app.use(cors());
app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const postPayload = req.body;

  posts[id] = {...postPayload, id};

  res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log("Listening on 4000");
});
