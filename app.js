const express = require("express");
const app = express();

// Routes
app.get("/api/ping", (req, res) => {
  res
    .json({
      success: true
    })
    .status(200);
});

// Listening port 5000
app.listen(5000, () => {
  console.log("Example app listening on port 3000!");
});
