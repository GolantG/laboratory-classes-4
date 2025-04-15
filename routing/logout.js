const express = require("express");
const { getLogoutView } = require(`../controllers/logoutController`);

const router = express.Router();

router.get("/", getLogoutView);

module.exports = router;
