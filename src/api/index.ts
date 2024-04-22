import express from 'express';

import uploadRoute from './routes/uploadRoute';
import {MessageResponse} from '../types/MessageTypes';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'routes: upload',
  });
});

router.use('/upload', uploadRoute);

export default router;
