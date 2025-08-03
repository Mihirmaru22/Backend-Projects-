import { Router } from 'express'
import {getNotes, postNotes} from '../controller/notesController.js'
const router = Router();

router.get('/', getNotes);
router.post('/', postNotes);

export default router;