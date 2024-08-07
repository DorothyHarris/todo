require("dotenv").config();
const express = require("express");


const app = express();


const { PORT } = process.env || 8000;


app.listen(PORT, () => console.log(`Сервер запущен: http://localhost:${PORT}`));
