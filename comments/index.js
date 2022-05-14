const express = require("express");
const bodyParser = require("body-parser");
const {randomBytes} = require("crypto");
const app = express();
const cors = require("cors");

const commentsByPostId = {};

app.use(bodyParser.json());
app.use(cors());
app.get("/posts/:postId/comments", (req, res) => {
  const postId = req.params.postId;
  res.send(commentsByPostId[postId] || []);
});

app.post("/posts/:postId/comments", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const commentPayload = req.body;
  const postId = req.params.postId;

  const comments = commentsByPostId[postId] || [];

  comments.push({...commentPayload, PostId: postId, id});

  commentsByPostId[postId] = comments;

  res.status(201).send(comments);
});

app.listen(4001, () => {
  console.log("Listening on 4001");
});
