const express = require("express"); // require the express web framework
const router = express.Router(); // Initialize App

router.get("/", (req, res) => {
  // Index Route
  res.json({ msg: "Success" });
});

module.exports = router;
