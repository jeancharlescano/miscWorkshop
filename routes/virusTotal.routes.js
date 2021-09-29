import {Router} from 'express';

const router = Router();

import {
    getDomainVirus
} from "../controllers/virusTotal.controller.js"

router.post("/", getDomainVirus);
export default router