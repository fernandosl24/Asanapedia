const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Set the views directory
app.set("views", path.join(__dirname, "views"));
// Set the view engine to render HTML
app.set("view engine", "ejs");

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Define a route to serve the index.html file
app.get("/", (req, res) => {
  res.render("index");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
