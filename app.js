const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const apiRouter = require('./routes/apiRouter');
const connectToDatabase = require('./database/connect');
const cors = require('./middlewares/corse');
const cookieParser = require("cookie-parser");
const pagesRouter = require("./routes/pages");

const app = express();
const PORT = 3001;

connectToDatabase();

app.use(
  cors,
  cookieParser(), // Добавляем миддлвар для работы с куки
  bodyParser.json(),
  pagesRouter,
  apiRouter,
  express.static(path.join(__dirname, "public"))
);

app.listen(PORT);