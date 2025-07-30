import express from 'express'
import {getQuotes , postQuotes} from '../controllers/quotesRoutes.js'

const router = express.Router();

// GET /quotes
router.get('/', getQuotes);

// POST /quotes
router.post('/', postQuotes);

export default router;