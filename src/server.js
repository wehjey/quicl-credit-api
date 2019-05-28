import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: 'application/json',
}));
app.use(cors());
app.use(process.env.BASE_URL, routes);
app.listen(port);

module.exports = app;
