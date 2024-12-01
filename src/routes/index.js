const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  if (req.query.name) {
    return res.send(`Hello, ${req.query.name}`);
  }
  res.send("Hello World");
});

module.exports = router;