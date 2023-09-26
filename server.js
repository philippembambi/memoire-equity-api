const bluebird = require("bluebird");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
var cors = require('cors'); // To handle Access-Control-Allow headers, we use it when the server and the client don't have the same origin (e.g : localhost:3000 and localhost:8080)
var express = require('express'),
app = express(),
port = process.env.PORT || 8080;

mongoose.set('strictQuery', false);
// Set mongoose Promise to Bluebird
mongoose.Promise = bluebird;

app.use(bodyParser.urlencoded({ extended: true }));     // To handle form element
app.use(bodyParser.json());                             // To get and receive data in JSON format
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

var routes = require('./routes/routes');
routes(app);

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;

// Retry connection
const connectWithRetry = () => {
  console.log("MongoDB connection with retry");
    mongoose
      .connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`)
      .then(() => {
        app.listen(port);
        console.log("MongoDB is connected successfully");
        console.log("Express server started on port : " + port);
      })
      .catch((err) => {
        console.log("MongoDB connection unsuccessful, retry after 5 seconds.");
        setTimeout(connectWithRetry, 5000);
      });
};

// Exit application on error
mongoose.connection.on("error", (err) => {
  console.log(`MongoDB connection error: ${err}`);
  setTimeout(connectWithRetry, 5000);
  // process.exit(-1)
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB is connected");
});

connectWithRetry();