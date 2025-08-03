import { Router } from "express";
import { getFile , postFile } from '../controller/userController.js'
const router = Router();

router.get('/',getFile);
router.post('/',postFile);


export default router;