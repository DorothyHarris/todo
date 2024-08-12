const router = require("express").Router();
const { User } = require("../db/models");
const { response } = require("express");

router.post("/login", async (require, response) => {
  const { email, password } = require.body;
  console.log(email, password);
});

module.exports = router;
