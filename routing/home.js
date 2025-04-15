const express = require("express");
const { getHomeView } = require(`../controllers/homeController`);

const router = express.Router();

router.get("/", getHomeView);
 
module.exports = router;
