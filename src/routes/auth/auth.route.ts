import express from "express";

import { signIn, signUp } from "../../controllers/auth/auth.controller";

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", signIn);

export default router;
