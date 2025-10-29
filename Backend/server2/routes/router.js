import express from 'express';
import { home } from '../controllers/Controller.js';

const router = express.Router();

router.get('/test', home);

export default router;