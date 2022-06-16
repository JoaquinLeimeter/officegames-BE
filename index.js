const express = require("express");
const { Server } = require("ws");

const PORT = process.env.PORT || 3000;

const server = express().listen(PORT, () =>
  console.log(`Listening on ${PORT}`)
);

const wss = new Server({ server });

wss.on("connection", function (ws, req) {
  ws.on("message", (message) => {
    let dataString = message.toString();
  });
});
