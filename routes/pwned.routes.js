import { Router } from 'express';

const router = Router();

import {
    getIfPwned
} from "../controllers/pwned.controller.js"

router.post("/", getIfPwned);
export default router;