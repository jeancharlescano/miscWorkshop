import {Router} from 'express';

const router = Router();

import {
    openPortNmap
} from "../controllers/nmap.controller.js"

router.post("/", openPortNmap);

export default router;