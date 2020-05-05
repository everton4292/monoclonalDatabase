const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');
const http = require('http')


const app = express();
const server = http.Server(app)


mongoose.connect('mongodb+srv://everton42:34773132@cluster0-epaxc.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

mongoose.connection.on("open", function(ref) {
  return console.log("Connected to mongo server.");
});

mongoose.connection.on("error", function(err) {
  console.log("Could not connect to mongo server!");
  return console.log(err);
});





app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);