require("dotenv").config();
const express = require("express");
const serverConfig = require("./config/serverConfog");
const loginRout = require("./routes/auth");

const app = express();
const { PORT } = process.env || 8000;
serverConfig(app);

app.use("/auth", loginRout);

app.listen(PORT, () => console.log(`Сервер запущен: http://localhost:${PORT}`));
