const express = require("express");
const path = require("path");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

let PORT = process.env.PORT || 3000;
let frame = 1;

app.get("/stream", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

setInterval(() => {
  io.emit("image", "some data");
}, 1000 / frame);

server.listen(PORT, () => {
  console.log(`Running a GraphQL API server at port ${PORT}`);
});
