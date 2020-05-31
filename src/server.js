const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
var mongoConnect = require('./secrets/credentials')

const routes = require('./routes');
const http = require('http')


const app = express();
const server = http.Server(app)


mongoConnect.data.connect()

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