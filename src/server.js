const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');




const routes = require('./routes');

const app = express();


app.use(express.json)
app.use(routes)

mongoose.connect('mongodb+srv://everton42:34773132@cluster0-epaxc.mongodb.net/test', {
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
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);