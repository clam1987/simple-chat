const express = require('express');
const socket = require('socket.io');
const PORT = process.env.PORT || 3001;

const app = express(),
      server = app.listen(PORT, () => console.log("Server is listening on " + PORT));

// Socket io Initialization
const io = socket(server);


io.on("connection", socket => console.log("Socket now connected"));
