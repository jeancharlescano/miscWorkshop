import { Router } from 'express';

import pwned from "./pwned.routes.js";
import virus from './virusTotal.routes.js';
import nmap from './nmap.routes.js';
const router = Router ();

router.use("/pwned", pwned);
router.use("/virus", virus);
router.use("/nmap", nmap);

export default router;