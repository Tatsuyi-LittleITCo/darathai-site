// server.js
const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the dist folder
const publicPath = path.join(__dirname, "dist");
app.use(express.static(publicPath));

// All other routes serve index.html (React routing)
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

// Use PORT from cPanel or fallback to 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`React app running at port ${port}`);
});
