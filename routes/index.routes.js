const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here in GatewayAPI");
});

router.get("/test", (req, res, next) => {
  res.json("Test from GatewayAPI");
});


module.exports = router;
