import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import pinoHttp from 'pino-http';
import dns from 'node:dns';
import { connectMongoDB } from './db/connectMongoDB.js';
import notesRoutes from './routes/notesRoutes.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();
const PORT = process.env.PORT || 3000;

const logger = pinoHttp({
  level: 'info',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: 'HH:MM:ss',
      ignore: 'pid,hostname',
      messageFormat:
        '{req.method} {req.url} {res.statusCode} - {responseTime}ms',
      hideObject: true,
    },
  },
});

app.use(logger);
app.use(express.json());
app.use(cors());

app.use(notesRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

dns.setServers(['8.8.8.8', '8.8.4.4']);

await connectMongoDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
