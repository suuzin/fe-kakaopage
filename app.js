const express = require("express");
const server = express();
const getImageAPI = require('./webtoonData/data.json');

server.use(express.static(__dirname + "/"))


server.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.get("/webtoonData/data", (request,response,next) => { 
  response.json(getImageAPI); 
});

server.listen(3000, (err) => {
  if (err) return console.log(err);
  console.log("The server is listening on port 3000");
});