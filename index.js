const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const { Server } = require("ws");

const PORT = process.env.PORT || 3000;

mongoose.connect(
  process.env.DATABASE_URL,
  (error) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.log('🔴 Database error: ', error);
    } else {
      // eslint-disable-next-line no-console
      console.log('🟢 Database connected');
    }
  },
);

const server = express().listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

const wss = new Server({ server });
wss.on("connection", function (ws, req) {
  ws.on("message", (message) => {
    let dataString = message.toString();
  });
});
