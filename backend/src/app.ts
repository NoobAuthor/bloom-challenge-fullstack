import express from 'express';
import cors from 'cors';
import routes from './api';
import { errorHandler } from './middleware/error';
import { config } from './config';

const app = express();

app.use(express.json());
app.use(cors(config.cors));

app.use(config.api.prefix, routes);

// Error handling middleware should be last
app.use(errorHandler);

app.listen(config.server.port, () => {
  console.log(
    `Server running on port ${config.server.port} in ${config.server.env} mode`,
  );
});
