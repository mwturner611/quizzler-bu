const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose
	.connect(process.env.MONGODB_URI || 'mongodb://localhost/quizzler')
	.then(() => console.log('connected to db...'))
	.catch((err) => console.log(err));


// Define API routes here
require('./routes/api/users')(app);
// app.get('/', (req, res)=> {
//   res.json("Hey, your page works")
// })

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
