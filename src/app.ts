require('dotenv').config();
import express, { ErrorRequestHandler } from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import errorHandling from './middlewares/error-handling';
import routes from './routes';
import '../src/database';

const app = express();

app.use(json({ limit: '25BM' }));

app.use(cors());

app.use(routes);

app.use(errorHandling as ErrorRequestHandler);

export default app;
