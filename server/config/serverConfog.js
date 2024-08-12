const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const cors = require("cors");

const serverConfig = (app) => {
  app.use(morgan("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static("public"));
  app.use(
    cors({
      origin: "http://localhost:5173",
      methods: "GET, POST, PUT, DELETE",
      allowedHeaders:
        "Origin, X-Requested-With, Content-Type, Accept, Authorization",
      credentials: true,
    }),
  );
};

module.exports = serverConfig;
